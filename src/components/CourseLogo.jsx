import { useState } from "react";
import "./CourseLogo.css";

const logo = (slug, mark, color) => ({ slug, mark, color });

const categoryLogoMap = {
  Coding: logo("javascript", "JS", "f7df1e"),
  "Tech Engines": logo("googlechrome", "ENG", "4285f4"),
  "AI Tools": logo("huggingface", "AI", "ffd21e"),
  "Developer Tools": logo("git", "DEV", "f05032"),
  "Web Technologies": logo("html5", "WEB", "e34f26"),
  Databases: logo("postgresql", "DB", "4169e1"),
  "Cloud Engineering": logo("googlecloud", "CLOUD", "4285f4"),
  DevOps: logo("githubactions", "OPS", "2088ff"),
  "Cyber Security": logo("owasp", "SEC", "ffffff"),
  "Mobile Development": logo("react", "APP", "61dafb"),
  "Game Development": logo("unity", "GAME", "ffffff"),
  "System Design": logo("apachekafka", "SYS", "231f20"),
};

const courseLogoMap = {
  // Coding
  python: logo("python", "PY", "3776ab"),
  javascript: logo("javascript", "JS", "f7df1e"),
  java: logo("openjdk", "JAVA", "ed8b00"),
  cpp: logo("cplusplus", "C++", "00599c"),
  "c-programming": logo("c", "C", "a8b9cc"),
  csharp: logo("dotnet", "C#", "512bd4"),
  typescript: logo("typescript", "TS", "3178c6"),
  go: logo("go", "GO", "00add8"),
  rust: logo("rust", "RS", "ffffff"),
  php: logo("php", "PHP", "777bb4"),
  kotlin: logo("kotlin", "KT", "7f52ff"),
  swift: logo("swift", "SWIFT", "f05138"),

  // Tech engines
  "game-engine": logo("unity", "GAME", "ffffff"),
  "search-engine": logo("google", "SEARCH", "4285f4"),
  "browser-engine": logo("chromium", "WEB", "4285f4"),
  "ai-engine": logo("tensorflow", "AI", "ff6f00"),
  "rendering-engine": logo("webgl", "3D", "990000"),
  "recommendation-engine": logo("scikitlearn", "REC", "f7931e"),
  "compiler-engine": logo("llvm", "LLVM", "262d3a"),
  "web-crawler": logo("scrapy", "CRAWL", "60a839"),

  // AI tools
  "ai-fundamentals": logo("huggingface", "AI", "ffd21e"),
  "prompt-engineering": logo("huggingface", "PROMPT", "ffd21e"),
  "ai-productivity-tools": logo("notion", "AI", "ffffff"),
  "ai-research-knowledge-tools": logo("googlescholar", "RESEARCH", "4285f4"),
  "ai-api-development": logo("huggingface", "API", "ffd21e"),
  "ai-chatbots": logo("chatbot", "CHAT", "00a67e"),
  "ai-applications": logo("huggingface", "AI", "ffd21e"),
  "rag-ai-knowledge-bases": logo("langchain", "RAG", "1c3c3c"),
  "ai-coding-tools": logo("githubcopilot", "COPILOT", "ffffff"),
  "ai-automation": logo("zapier", "AUTO", "ff4f00"),
  "ai-agents": logo("huggingface", "AGENT", "ffd21e"),
  "local-ai-ollama": logo("ollama", "LOCAL", "ffffff"),
  "multimodal-ai": logo("google", "MULTI", "4285f4"),
  "ai-image-video-generation": logo("huggingface", "MEDIA", "ffd21e"),
  "production-ai-engineering": logo("weightsandbiases", "MLOPS", "ffbe00"),
  "ai-security": logo("snyk", "AI SEC", "4c4a73"),
  "ai-backend-engineering": logo("nodedotjs", "AI API", "339933"),
  "ai-cloud": logo("googlecloud", "AI CLOUD", "4285f4"),
  "ai-agents-mcp-tools": logo("huggingface", "TOOLS", "ffd21e"),
  "ai-saas-products": logo("stripe", "SAAS", "635bff"),

  // Developer tools
  git: logo("git", "GIT", "f05032"),
  github: logo("github", "GH", "ffffff"),
  docker: logo("docker", "DOCKER", "2496ed"),
  vscode: logo("visualstudiocode", "VS", "007acc"),
  npm: logo("npm", "NPM", "cb3837"),
  terminal: logo("gnubash", "CLI", "4eaa25"),
  postman: logo("postman", "API", "ff6c37"),
  vercel: logo("vercel", "VCL", "ffffff"),
  linux: logo("linux", "LINUX", "fcc624"),
  devtools: logo("googlechrome", "DEV", "4285f4"),

  // Web technologies
  html: logo("html5", "HTML", "e34f26"),
  css: logo("css", "CSS", "1572b6"),
  "responsive-design": logo("css", "RWD", "1572b6"),
  react: logo("react", "REACT", "61dafb"),
  nodejs: logo("nodedotjs", "NODE", "339933"),
  express: logo("express", "EXP", "ffffff"),
  "rest-api": logo("openapiinitiative", "REST", "6ba539"),
  nextjs: logo("nextdotjs", "NEXT", "ffffff"),
  tailwind: logo("tailwindcss", "TW", "06b6d4"),
  "web-security": logo("owasp", "WEB SEC", "000000"),
  authentication: logo("auth0", "AUTH", "eb5424"),
  websockets: logo("socketdotio", "WS", "010101"),
  pwa: logo("pwa", "PWA", "5a0fc8"),
  "frontend-projects": logo("react", "UI", "61dafb"),
  fullstack: logo("nextdotjs", "FULL", "ffffff"),

  // Databases
  "database-fundamentals": logo("databricks", "DATA", "ff3621"),
  sql: logo("postgresql", "SQL", "4169e1"),
  mongodb: logo("mongodb", "MONGO", "47a248"),
  mysql: logo("mysql", "MYSQL", "4479a1"),
  "database-tools-gui": logo("dbeaver", "GUI", "382923"),
  postgresql: logo("postgresql", "PG", "4169e1"),
  "database-design": logo("postgresql", "DESIGN", "4169e1"),
  "advanced-sql": logo("postgresql", "SQL+", "4169e1"),
  "database-indexing-performance": logo("elasticsearch", "INDEX", "005571"),
  "redis-caching": logo("redis", "REDIS", "dc382d"),
  "nosql-databases": logo("mongodb", "NOSQL", "47a248"),
  "database-integration": logo("prisma", "ORM", "2d3748"),
  "database-security": logo("hashicorp", "SECURE", "ffffff"),
  "database-administration": logo("postgresql", "DBA", "4169e1"),
  "database-scaling": logo("cockroachlabs", "SCALE", "6933ff"),
  "distributed-databases": logo("apachecassandra", "DIST", "1287b1"),
  "cloud-databases": logo("googlecloud", "CLOUD DB", "4285f4"),
  "production-database-engineering": logo("grafana", "PROD DB", "f46800"),
  "database-backend-engineering": logo("prisma", "DB API", "2d3748"),

  // Cloud engineering
  "cloud-foundations-providers": logo("googlecloud", "CLOUD", "4285f4"),
  "cloud-linux-operations": logo("linux", "LINUX", "fcc624"),
  "cloud-networking": logo("cloudflare", "NET", "f38020"),
  "cloud-containers": logo("docker", "DOCKER", "2496ed"),
  "cloud-kubernetes": logo("kubernetes", "K8S", "326ce5"),
  "cloud-cicd": logo("githubactions", "CI/CD", "2088ff"),
  "cloud-terraform": logo("terraform", "TF", "844fba"),
  "cloud-security": logo("snyk", "CLOUD SEC", "4c4a73"),
  "cloud-monitoring-logging": logo("prometheus", "OBS", "e6522c"),
  "cloud-dns-https-proxies": logo("cloudflare", "DNS", "f38020"),
  "cloud-load-balancing": logo("nginx", "LB", "009639"),
  "cloud-serverless-databases": logo("vercel", "SERVERLESS", "ffffff"),

  // DevOps
  "devops-foundations": logo("githubactions", "OPS", "2088ff"),
  "linux-for-devops": logo("linux", "LINUX", "fcc624"),
  "ci-cd-pipelines": logo("githubactions", "CI/CD", "2088ff"),
  "infrastructure-as-code": logo("terraform", "IAC", "844fba"),

  // Cyber security
  "cybersecurity-fundamentals": logo("owasp", "SEC", "ffffff"),
  "networking-for-cybersecurity": logo("wireshark", "NET SEC", "1679a7"),
  "linux-security": logo("linux", "LINUX SEC", "fcc624"),
  "windows-security": logo("windows", "WIN SEC", "0078d4"),
  cryptography: logo("openssl", "CRYPTO", "721412"),
  "identity-access-management": logo("auth0", "IAM", "eb5424"),
  "web-application-security": logo("owasp", "APP SEC", "ffffff"),
  "api-security": logo("openapiinitiative", "API SEC", "6ba539"),
  "owasp-top-10": logo("owasp", "OWASP", "ffffff"),
  "ethical-hacking-basics": logo("metasploit", "HACK", "2596cd"),
  "reconnaissance-osint": logo("theharvester", "OSINT", "4d4d4d"),
  "vulnerability-assessment": logo("tenable", "VULN", "00bcd4"),
  "penetration-testing": logo("kalilinux", "PENTEST", "557c94"),
  "network-security": logo("wireshark", "NETWORK", "1679a7"),
  "cyber-cloud-security": logo("googlecloud", "CLOUD SEC", "4285f4"),
  "security-monitoring-siem": logo("splunk", "SIEM", "ffffff"),
  "incident-response": logo("elastic", "IR", "005571"),
  "digital-forensics": logo("wireshark", "FORENSICS", "1679a7"),
  "malware-fundamentals": logo("virustotal", "MALWARE", "394eff"),
  "ctf-security-labs": logo("hackthebox", "CTF", "9fef00"),

  // Mobile, game, and system design
  "mobile-development-foundations": logo("react", "MOBILE", "61dafb"),
  "android-with-kotlin": logo("android", "ANDROID", "3ddc84"),
  "ios-with-swift": logo("swift", "IOS", "f05138"),
  "react-native": logo("react", "RN", "61dafb"),
  "game-development-foundations": logo("unity", "GAME", "ffffff"),
  "game-design": logo("unity", "DESIGN", "ffffff"),
  "unity-fundamentals": logo("unity", "UNITY", "ffffff"),
  "game-programming": logo("unrealengine", "UE", "0e1128"),
  "system-design-foundations": logo("apachekafka", "SYSTEM", "ffffff"),
  "scalability-and-performance": logo("kubernetes", "SCALE", "326ce5"),
  "distributed-systems": logo("apachekafka", "DIST", "ffffff"),
  "api-architecture": logo("openapiinitiative", "API", "6ba539"),
};

export function getCourseLogo(course) {
  return courseLogoMap[course?.id] || categoryLogoMap[course?.category] || logo("code", "CODE", "3dff49");
}

function CourseLogo({ course, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const logoData = getCourseLogo(course);

  return (
    <span className={`course-logo ${className}`.trim()} aria-hidden="true">
      {!imageFailed && (
        <img
          src={`https://cdn.simpleicons.org/${logoData.slug}/${logoData.color}`}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      )}
      {imageFailed && (
        <span className="course-logo-fallback" style={{ "--course-logo-color": `#${logoData.color}` }}>
          {logoData.mark}
        </span>
      )}
    </span>
  );
}

export default CourseLogo;
