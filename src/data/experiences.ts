import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    company: "IIT Bombay",
    logo: "/logos/iitbombay.svg",
    accent: ["#00a8e8", "#055a8c"],
    projectName: "Kalanjiyam & LLM Pipeline",
    role: "Sr. Project Technical Assistant",
    location: "Powai, Mumbai",
    dateRange: "June 2026 – Present",
    responsibilities: [
      "Architected and maintained the **Kalanjiyam Archival Management Platform**, delivering infrastructure improvements to production on **IIT Bombay servers**.",
      "Designed and deployed an **LLM-based translation pipeline** using **vLLM**, **IndicTrans2**, and **Gemma**, with dynamic model loading/unloading to optimize **GPU VRAM utilization** and allow concurrent workloads.",
      "Conducted end-to-end scalability testing using **Locust** and **Celery**, benchmarking throughput and **P95/P99 latency** while validating performance at up to **1,000 background tasks**.",
    ],
  },
  {
    company: "Excellitude Pvt Ltd",
    logo: "/logos/excellitude.svg",
    accent: ["#9b5cf5", "#5a85f5"],
    projectName: "InLuna & Droolin",
    role: "Full Stack Developer",
    location: "Remote",
    dateRange: "April 2024 – April 2026",
    responsibilities: [
      "Owned backend architecture for **InLuna** and **Droolin**, from schema design through **AWS production deployment** as the **sole backend engineer** across both platforms.",
      "Improved API performance by introducing **server-side pagination** and limiting database results to required records, reducing unnecessary data retrieval and improving responsiveness as dataset size increased.",
      "Designed and implemented real-time **WebSocket communication** for phishing alerts and analytics, replacing REST-based polling and achieving **<200ms end-to-end latency** under tested workloads, as measured through load testing.",
      "Cut deployment setup time by **~50%** by standardizing **AWS EC2 + NGINX** environments and establishing deployment runbooks; shipped stateless **Node.js** services for a **Chrome extension**.",
    ],
  },
  {
    company: "IIT Bombay",
    logo: "/logos/iitbombay.svg",
    accent: ["#00c9a7", "#0081a7"],
    projectName: "Project Udaan",
    role: "Backend Developer (Intern)",
    dateRange: "August 2023 – January 2024",
    location: "Powai, Mumbai",
    responsibilities: [
      "Maintained **Project Udaan's** **Python/Flask OCR and translation pipelines** for PDF, DOCX, PPTX, and XLSX processing with **95%+ reliability**.",
      "Refactored Project Udaan's OCR logic into a **unified Flask module**, improving text-color handling and image recognition accuracy by **~75%**.",
      "Developed **Python batch-processing utilities** for Project Udaan, including **Pandas-based XLSX translation tools** for automated structured data transformations.",
    ],
  },
];
