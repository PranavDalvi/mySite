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
      "This project implements a malware detection system using machine learning and binary visualization techniques. It aims to classify .exe files as safe or malicious based on visualized binary patterns. This repository includes the dataset and model used for the final year MSc in Computer Science research project.",
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
    projectName: "Front End Challanges",
    description:
      "This Site contains my frontend challanges completed and which are hosted live.",
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
      "InLuna is a behavior-based phishing detection, intelligent insights, and micro-training platform utilizing ML-based detection engine all from one lightweight browser extension.",
    image: inlunaImage,
    url: "https://in-luna-landing.vercel.app/",
    urlTitle: "View",
    dateRange: "APR 2024 - Present",
    for: "Excellitude pvt ltd",
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
      "Droolin is a behavioral commerce layer for modern restaurants - unlocking performance, loyalty, and brand identity through menu intelligence.",
    image: droolinImage,
    url: "https://droolin.vercel.app/",
    urlTitle: "View",
    dateRange: "MAY 2025 - Present",
    for: "Excellitude pvt ltd",
    techStack: ["Next.js", "MongoDB", "AWS", "Tailwind CSS", "NGINX"],
  },
  {
    projectName: "Project Udaan - AI-Powered Translation Platform",
    description:
      "The Udaan project enables translation of textbooks and learning materials, across English and all Indian languages. It leverages AI and ML technologies to provide high-quality translations, making education more accessible to students nationwide.",
    image: udaanImage,
    url: "/projects/Udaan",
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
    url: "https://sh-astra.vercel.app/",
    urlTitle: "View",
    dateRange: "SEP 2025 - OCT 2025",
    for: "Excellitude pvt ltd",
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
