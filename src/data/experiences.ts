import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    company: "Excellitude Pvt Ltd",
    logo: "/logos/excellitude.svg",
    accent: ["#9b5cf5", "#5a85f5"],
    projectName: "InLuna",
    role: "MERN Stack Developer",
    jobType: "Part-time",
    location: "Remote",
    dateRange: "April 2024 – Present",
    description:
      "InLuna is a behavior-based phishing detection, intelligent insights, and micro-training platform utilizing ML-based detection engine all from one lightweight browser extension.",
    responsibilities: [
      "Developed a MERN stack dashboard with WebSockets to display phishing URLs detected by an AI-ML model, integrating robust authentication mechanisms for secure access.",
      "Contributed to the development of a browser extension to streamline phishing detection workflows.",
      "Trained and fine-tuned BERT models to assist in AI-driven phishing detection.",
      "Managed MongoDB databases and deployed scalable services on AWS EC2 with NGINX.",
      "Collaborated with the design team to build responsive UI components and user flows using React.js and Figma prototypes.",
    ],
  },
  {
    company: "Excellitude Pvt Ltd",
    logo: "/logos/excellitude.svg",
    accent: ["#e44c65", "#b1202b"],
    projectName: "Droolin",
    role: "NextJS Developer",
    dateRange: "May 2025 – Present",
    jobType: "Part-time",
    location: "Remote",
    description:
      "Droolin is a behavioral commerce layer for modern restaurants - unlocking performance, loyalty, and brand identity through menu intelligence.",
    responsibilities: [
      "Led and built a platform that integrates a dashboard to display real-time data of what guests see, order, and love then auto-optimizes the menu to sell more.",
      "Managed MongoDB databases and deployed scalable services on AWS EC2 with NGINX.",
      "Designed and implemented a no-login, no-signup user tracking system using FingerprintJS, enabling seamless and anonymous user interaction.",
      "Developed a custom theme customizer for restaurant branding and UI personalization.",
    ],
  },
  {
    company: "IIT Bombay",
    logo: "/logos/iitbombay.svg",
    accent: ["#00a8e8", "#055a8c"],
    projectName: "Project Udaan",
    role: "Backend Python Developer",
    dateRange: "August 2023 – January 2024",
    jobType: "Internship",
    location: "Powai",
    description:
      "The Udaan project enables translation of textbooks and learning materials, across English and all Indian languages.",
    responsibilities: [
      "Helped to improve Project Udaan to provide users with the best experience.",
      "Managed and deployed the OCR + Translation backend on the servers of IIT-B.",
      "Solve errors to make sure the backend runs smoothly for all types of documents. (PDF, DOCX, PPTX, and XLSX)",
      "Tried to implement a new OCR pipeline using DocTR.",
      "Developed a new pipeline to translate web scraped data.",
      "Developed XLSX translation script using Pandas.",
      "Was part of TechFest (TechConnect) 2023.",
    ],
  },
];
