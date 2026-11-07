#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { AUTHORED_BLOCK_TYPES, normalizeAuthoredDelivery } from "../src/utils/authoredLesson.mjs";

const ROOT = process.cwd();

function usage() {
  console.log(`Usage:
  npm run validate:lessons
  node scripts/validateAuthoredLessons.mjs --lesson <courseId>:<lessonId>
  node scripts/validateAuthoredLessons.mjs --file <path-to-module> [--json] [--strict]

Options:
  --lesson <courseId>:<lessonId>  Validate one lesson from the bundled catalog.
  --file <path>                   Validate a lesson, delivery, array, or catalog module.
  --all                           Validate every authored lesson in the bundled catalog (default).
  --json                          Print machine-readable results.
  --strict                        Treat warnings as failures.
  --help                          Show this help.
`);
}

function issue(severity, pathName, message) {
  return { severity, path: pathName, message };
}

function isObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function validateCode(block, location, issues) {
  const code = block.code ?? block.content ?? block.text;
  if (typeof code !== "string" || !code.trim()) {
    issues.push(issue("error", location, "code-like blocks require a non-empty code or content string"));
    return;
  }
  const language = String(block.language || "").toLowerCase();
  if (["javascript", "js", "node"].includes(language)) {
    try {
      // Syntax-check only. The validator never executes authored code.
      // eslint-disable-next-line no-new-func
      new Function(code);
    } catch (error) {
      issues.push(issue("error", location, `JavaScript syntax error: ${error.message}`));
    }
  }
  if (["json"].includes(language) || block.type === "json") {
    try {
      JSON.parse(code);
    } catch (error) {
      issues.push(issue("error", location, `JSON syntax error: ${error.message}`));
    }
  }
}

function validateBlock(block, location, issues) {
  if (!isObject(block)) {
    issues.push(issue("error", location, "block must be an object"));
    return;
  }
  if (!AUTHORED_BLOCK_TYPES.has(block.type)) {
    issues.push(issue("error", location, `unsupported block type '${String(block.type)}'`));
    return;
  }
  if (["text", "heading", "subheading", "quote", "callout"].includes(block.type)
    && !String(block.text || block.content || block.description || "").trim()) {
    issues.push(issue("error", location, `${block.type} blocks require text, content, or description`));
  }
  if (["bullets", "numbered", "checklist"].includes(block.type)
    && (!Array.isArray(block.items) || block.items.length === 0)) {
    issues.push(issue("error", location, `${block.type} blocks require a non-empty items array`));
  }
  if (["code", "json", "xml", "copy", "copyable", "command", "config"].includes(block.type)) {
    validateCode(block, location, issues);
  }
  if (block.type === "quiz" || block.type === "choice") {
    if (!String(block.question || block.title || "").trim()) issues.push(issue("error", location, "quiz/choice blocks require a question"));
    if (!Array.isArray(block.options) || block.options.length < 2) issues.push(issue("error", location, "quiz/choice blocks require at least two options"));
    const answer = String(block.correctAnswer ?? block.answerKey ?? block.answer ?? "").trim();
    if (block.type === "quiz" && !answer) issues.push(issue("error", location, "quiz blocks require an answer, answerKey, or correctAnswer"));
    if (answer && Array.isArray(block.options) && !block.options.some((option) => String(option?.text || option?.label || option).trim() === answer)) {
      issues.push(issue("error", location, "quiz answer must match one of the options exactly"));
    }
  }
  if (block.type === "tutorial") {
    if (!Array.isArray(block.steps) || block.steps.length < 2) issues.push(issue("error", location, "tutorial blocks require at least two steps"));
    for (const [index, step] of (block.steps || []).entries()) {
      if (!isObject(step)) issues.push(issue("error", `${location}.steps[${index}]`, "tutorial step must be an object"));
      else {
        if (!String(step.title || "").trim()) issues.push(issue("error", `${location}.steps[${index}]`, "tutorial steps require a title"));
        if (!String(step.description || step.content || "").trim()) issues.push(issue("warning", `${location}.steps[${index}]`, "tutorial step has no learner-facing description"));
      }
    }
  }
  if (block.type === "diagram") {
    if (!Array.isArray(block.nodes) || !block.nodes.length) issues.push(issue("error", location, "diagram blocks require nodes"));
    if (!Array.isArray(block.edges)) issues.push(issue("error", location, "diagram blocks require an edges array"));
  }
}

function validateDelivery(lesson, sourceLabel) {
  const issues = [];
  const delivery = lesson?.delivery?.type === "authored" ? lesson.delivery : lesson;
  const prefix = sourceLabel || lesson?.id || "delivery";
  if (!isObject(delivery)) return [issue("error", prefix, "authored delivery must be an object")];
  if (delivery.type !== "authored") issues.push(issue("error", prefix, "delivery.type must be 'authored'"));
  if (Number(delivery.version) !== 1) issues.push(issue("error", `${prefix}.version`, "version must be 1"));
  if (!Array.isArray(delivery.sections) || delivery.sections.length === 0) {
    issues.push(issue("error", `${prefix}.sections`, "authored delivery requires at least one section"));
    return issues;
  }
  const ids = new Set();
  for (const [index, section] of delivery.sections.entries()) {
    const location = `${prefix}.sections[${index}]`;
    if (!isObject(section)) {
      issues.push(issue("error", location, "section must be an object"));
      continue;
    }
    if (!String(section.id || "").trim()) issues.push(issue("error", `${location}.id`, "section requires an id"));
    if (section.id && ids.has(section.id)) issues.push(issue("error", `${location}.id`, `duplicate section id '${section.id}'`));
    if (section.id) ids.add(section.id);
    if (!String(section.title || "").trim()) issues.push(issue("error", `${location}.title`, "section requires a title"));
    if (!Array.isArray(section.blocks) || section.blocks.length === 0) issues.push(issue("error", `${location}.blocks`, "section requires at least one block"));
    for (const [blockIndex, block] of (section.blocks || []).entries()) validateBlock(block, `${location}.blocks[${blockIndex}]`, issues);
  }
  if (lesson?.id && !normalizeAuthoredDelivery(lesson)) issues.push(issue("error", prefix, "runtime normalization rejected this authored lesson"));
  return issues;
}

function collectAuthoredLessons(value, sourceLabel = "catalog") {
  if (!value) return [];
  if (value?.delivery?.type === "authored") return [{ lesson: value, label: sourceLabel }];
  if (value?.type === "authored" && Array.isArray(value.sections)) return [{ lesson: { id: sourceLabel, delivery: value }, label: sourceLabel }];
  if (Array.isArray(value)) return value.flatMap((item, index) => collectAuthoredLessons(item, `${sourceLabel}[${index}]`));
  if (isObject(value)) return Object.entries(value).flatMap(([key, item]) => collectAuthoredLessons(item, `${sourceLabel}.${key}`));
  return [];
}

async function loadModule(filePath) {
  const resolved = path.isAbsolute(filePath) ? filePath : path.resolve(ROOT, filePath);
  const module = await import(pathToFileURL(resolved).href);
  return module.default ?? module.lessons ?? module.delivery ?? module;
}

function parseArgs(argv) {
  const args = { all: true, json: false, strict: false };
  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (value === "--help" || value === "-h") args.help = true;
    else if (value === "--all") args.all = true;
    else if (value === "--json") args.json = true;
    else if (value === "--strict") args.strict = true;
    else if (value === "--file" || value === "--lesson") args[value.slice(2)] = argv[++index];
    else throw new Error(`Unknown option '${value}'`);
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) return usage();
  let lessons;
  if (args.file) {
    lessons = await loadModule(args.file);
  } else {
    const catalog = await loadModule("src/data/lessons.mjs");
    if (args.lesson) {
      const [courseId, lessonId] = String(args.lesson).split(":");
      const lesson = catalog?.[courseId]?.find((item) => String(item.id) === lessonId);
      if (!lesson) throw new Error(`Could not find lesson '${args.lesson}' in the bundled catalog`);
      lessons = lesson;
    } else {
      lessons = catalog;
    }
  }
  const authoredLessons = collectAuthoredLessons(lessons, args.file || args.lesson || "catalog");
  if (!authoredLessons.length) throw new Error("No authored lessons found. Add delivery.type='authored' or pass --file with an authored module.");
  const results = authoredLessons.map(({ lesson, label }) => ({ label, id: lesson.id || label, issues: validateDelivery(lesson, label) }));
  const errors = results.flatMap((result) => result.issues.filter((item) => item.severity === "error"));
  const warnings = results.flatMap((result) => result.issues.filter((item) => item.severity === "warning"));
  if (args.json) {
    console.log(JSON.stringify({ ok: errors.length === 0 && (!args.strict || warnings.length === 0), lessons: results, summary: { authored: results.length, errors: errors.length, warnings: warnings.length } }, null, 2));
  } else {
    for (const result of results) {
      const status = result.issues.some((item) => item.severity === "error") ? "FAIL" : result.issues.length ? "WARN" : "OK";
      console.log(`${status} ${result.id}`);
      for (const item of result.issues) console.log(`  ${item.severity.toUpperCase()} ${item.path}: ${item.message}`);
    }
    console.log(`\nValidated ${results.length} authored lesson(s): ${errors.length} error(s), ${warnings.length} warning(s).`);
  }
  if (errors.length || (args.strict && warnings.length)) process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Validator error: ${error.message}`);
  process.exitCode = 1;
});
