const mammoth = require("mammoth");
const { PDFParse } = require("pdf-parse");
const TeachingMaterial = require("../models/TeachingMaterial");

const MAX_TEXT_LENGTH = 8_000_000;
const CHUNK_SIZE = 2400;
const CHUNK_OVERLAP = 350;

function normalizeText(value) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, MAX_TEXT_LENGTH);
}

async function extractDocumentText(buffer, mimeType, filename) {
  const type = String(mimeType || "").toLowerCase();
  const extension = String(filename || "").toLowerCase().split(".").pop();
  if (type === "application/pdf" || extension === "pdf") {
    const parser = new PDFParse({ data: buffer });
    try {
      const result = await parser.getText();
      return normalizeText(result?.text || "");
    } finally {
      await parser.destroy().catch(() => {});
    }
  }
  if (type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || extension === "docx") {
    const result = await mammoth.extractRawText({ buffer });
    return normalizeText(result.value);
  }
  if (type.startsWith("text/") || ["txt", "md", "markdown"].includes(extension)) {
    return normalizeText(buffer.toString("utf8"));
  }
  throw new Error("Only PDF, DOCX, TXT, and Markdown files are supported");
}

function splitIntoChunks(text) {
  const paragraphs = normalizeText(text).split(/\n{2,}/).map((part) => part.trim()).filter(Boolean);
  const chunks = [];
  let current = "";
  for (const paragraph of paragraphs) {
    if (current && current.length + paragraph.length + 2 > CHUNK_SIZE) {
      chunks.push(current.trim());
      const overlap = current.slice(-CHUNK_OVERLAP);
      current = `${overlap}\n\n${paragraph}`;
    } else {
      current = current ? `${current}\n\n${paragraph}` : paragraph;
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

function tokenize(value) {
  return [...new Set(String(value || "").toLowerCase().match(/[a-z0-9+#.-]{2,}/g) || [])];
}

async function retrieveTeachingContext({ courseId, lessonId, query, limit = 6 }) {
  if (!courseId || !query || TeachingMaterial.db.readyState !== 1) return { text: "", sources: [] };
  const materials = await TeachingMaterial.find({
    courseId: String(courseId),
    enabled: true,
    status: "ready",
    $or: [{ lessonId: String(lessonId || "") }, { lessonId: "" }],
  }).select("title originalFilename lessonId lessonTitle extractedText").lean();
  const queryTokens = tokenize(query);
  const candidates = [];
  for (const material of materials) {
    const chunks = splitIntoChunks(material.extractedText);
    chunks.forEach((chunk, index) => {
      const lower = chunk.toLowerCase();
      const score = queryTokens.reduce((total, token) => total + (lower.includes(token) ? 1 : 0), 0)
        + (String(material.lessonId) === String(lessonId) ? 2 : 0);
      if (score > 0) candidates.push({ score, chunk, index, material });
    });
  }
  candidates.sort((left, right) => right.score - left.score);
  const selected = candidates.slice(0, limit);
  return {
    text: selected.map((item, index) => `[Source ${index + 1}] ${item.material.title} (${item.material.lessonTitle || "course material"})\n${item.chunk}`).join("\n\n"),
    sources: selected.map((item) => ({
      title: item.material.title,
      filename: item.material.originalFilename,
      lessonId: item.material.lessonId || null,
      lessonTitle: item.material.lessonTitle || null,
      chunk: item.index + 1,
    })),
  };
}

module.exports = { extractDocumentText, splitIntoChunks, retrieveTeachingContext };
