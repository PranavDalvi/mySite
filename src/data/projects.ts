import type { Project } from "../types/project";

import inlunaImage from "../assets/projects/InLuna-pic.webp";
import shastraImage from "../assets/projects/sh-astra-pic.webp";
import droolinImage from "../assets/projects/Droolin-pic.webp";
import udaanImage from "../assets/projects/Project-Udaan.webp";
import dvimayaImage from "../assets/projects/Dvimaya/dvimaya-1.png";
import frontend_chall from "../assets/projects/FrontEnd_Challanges/frontend-chall.svg";
import PBMImg from "../assets/projects/book-manager-pic.webp";

export const projects: Project[] = [
  {
    projectName: "Dvimaya - Malware Detection using ML & Binary Visualization",
    description:
      "An end-to-end Python malware detection system converting executable binaries into visualized patterns, utilizing CNN models (~84% accuracy) for real-time threat inference. Research published in TVCR (2025) and awarded 3rd place in inter-college research.",
    image: dvimayaImage,
    url: "/projects/dvimaya",
    urlTitle: "View",
    dateRange: "OCT 2024 - MAY 2025",
    for: "Master's Research Project",
    techStack: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "OpenCV",
      "NumPy",
    ],
  },
  {
    projectName: "Front End Challenges",
    description:
      "This site showcases my completed frontend challenges, built with modern CSS/HTML and hosted live.",
    image: frontend_chall,
    url: "https://pranavdalvi.github.io/frontend-mentor/",
    urlTitle: "View",
    dateRange: "NOV 2025 - Present",
    for: "Self",
    techStack: ["HTML5", "CSS3", "GitHub Actions"],
  },
  {
    projectName: "InLuna - Advanced Phishing Detection",
    description:
      "A behavior-based phishing detection platform using an ML detection engine and real-time WebSockets (<200ms latency), deployed on AWS EC2 behind NGINX as the sole backend engineer.",
    image: inlunaImage,
    url: "/projects/inluna",
    urlTitle: "View",
    dateRange: "APR 2024 - APR 2026",
    for: "Excellitude Pvt Ltd",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "AWS",
      "Tailwind CSS",
      "NGINX",
    ],
  },
  {
    projectName: "Droolin - Behavioral Commerce for Restaurants",
    description:
      "A behavioral commerce layer for restaurants featuring real-time menu analytics dashboards, zero-signup guest tracking with FingerprintJS, and dynamic theme customization on Next.js & AWS.",
    image: droolinImage,
    url: "/projects/droolin",
    urlTitle: "View",
    dateRange: "MAY 2025 - APR 2026",
    for: "Excellitude Pvt Ltd",
    techStack: ["Next.js", "MongoDB", "AWS", "Tailwind CSS", "NGINX"],
  },
  {
    projectName: "Project Udaan - AI-Powered Translation Platform",
    description:
      "Maintained Python/Flask OCR and multilingual translation pipelines for academic materials across Indian languages with 95%+ reliability, refactoring OCR logic for a ~75% accuracy boost.",
    image: udaanImage,
    url: "/projects/udaan",
    urlTitle: "View",
    dateRange: "AUG 2023 - JAN 2024",
    for: "IIT Bombay",
    techStack: [
      "Python",
      "Flask",
      "NumPy",
      "OpenCV",
      "Tesseract OCR",
      "Beautiful Soup 4",
      "NGROK",
    ],
  },
  {
    projectName: "SH+ASTRA - Cyber Risk Assessment Platform",
    description:
      "SH+ASTRA is an enterprise-grade cybersecurity maturity assessment platform. It evaluates organizations against the NIST Cybersecurity Framework 2.0, drives structured assessments through questionnaires and interviews, and produces AI-enhanced risk reports with maturity grades, residual risk scores, and strategic remediation roadmaps.",
    image: shastraImage,
    url: "/projects/sh-astra",
    urlTitle: "View",
    dateRange: "SEP 2025 - OCT 2025",
    for: "Excellitude Pvt Ltd",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
  },
  {
    projectName: "Personal Book Manager - Manage Your library with ease",
    description:
      "A full-stack Book Management application built with Next.js, Node.js APIs, MongoDB, and React. Users can register, login, and manage their personal reading list with tags, status tracking, and filters.",
    image: PBMImg,
    url: "https://personal-book-manager-mu.vercel.app",
    urlTitle: "View",
    dateRange: "March 2026",
    for: "Assignment",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
  },
];
