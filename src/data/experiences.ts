import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    company: "Excellitude Pvt Ltd",
    logo: "/logos/excellitude.svg",
    accent: ["#9b5cf5", "#5a85f5"],
    projectName: "InLuna",
    role: "Software Engineer",
    location: "Remote",
    dateRange: "April 2024 – Present",
    description:
      "InLuna is a behavior-based phishing detection, intelligent insights, and micro-training platform utilizing ML-based detection engine all from one lightweight browser extension.",
    responsibilities: [
      "Designed, built, and shipped production-grade backend and full-stack systems supporting ML-driven phishing detection and behavioral analytics platforms used by users.",
      "Built real-time data pipelines and dashboards using Node.js, React/Next.js, WebSockets, and MongoDB, enabling low-latency streaming and visualization of security and behavioral events.",
      "Developed backend services and APIs to ingest, process, and aggregate high-throughput user and event data, supporting near-real-time insights and analytics.",
      "Optimized database schemas, query patterns, and indexing strategies, improving backend data retrieval performance under production workloads.",
      "Deployed and operated services on AWS EC2 with NGINX, ensuring reliability, scalability, and smooth production rollouts.",
      "Implemented browser extension features to automate phishing detection workflows, improving usability and reducing manual review overhead",
      "Collaborated closely with designers and frontend engineers to deliver responsive, user-centric UIs aligned with product requirements.",
    ],
  },
  // {
  //   company: "Excellitude Pvt Ltd",
  //   logo: "/logos/excellitude.svg",
  //   accent: ["#e44c65", "#b1202b"],
  //   projectName: "Droolin",
  //   role: "NextJS Developer",
  //   dateRange: "May 2025 – Present",
  //   location: "Remote",
  //   description:
  //     "Droolin is a behavioral commerce layer for modern restaurants - unlocking performance, loyalty, and brand identity through menu intelligence.",
  //   responsibilities: [
  //     "Engineered a real-time behavioral analytics dashboard showing what guests view, order, and interact with, enabling automatic menu optimization for restaurants.",
  //     "Developed a no-login, no-signup user tracking system using FingerprintJS, enabling seamless anonymous analytics.",
  //     "Implemented a theme customization engine to support restaurant-specific branding and UI personalization.",
  //     "Managed MongoDB and AWS EC2 deployments, ensuring high availability and scalable service performance.",
  //   ],
  // },
  {
    company: "IIT Bombay",
    logo: "/logos/iitbombay.svg",
    accent: ["#00a8e8", "#055a8c"],
    projectName: "Project Udaan",
    role: "Backend Developer",
    dateRange: "August 2023 – January 2024",
    location: "Powai",
    description:
      "The Udaan project enables translation of textbooks and learning materials, across English and all Indian languages.",
    responsibilities: [
      "Maintained and optimized large-scale OCR and multilingual translation pipelines processing PDF, DOCX, PPTX, and XLSX documents with 95%+ end-to-end reliability.",
      "Diagnosed and resolved failures across multi-stage backend pipelines, improving system stability and reducing unpredictable job failures.",
      "Refactored fragmented OCR implementations into a unified backend component, improving text-color handling and image recognition accuracy by ~75%.",
      "Built Python utilities (including Pandas-based XLSX translators) to support batch processing and structured data transformations for academic teams.",
    ],
  },
];
