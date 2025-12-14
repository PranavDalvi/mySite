import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
    {
        company: "Excellitude Pvt Ltd",
        logo: "/logos/excellitude.svg",
        accent: ["#9b5cf5", "#5a85f5"],
        projectName: "InLuna",
        role: "MERN Stack Developer",
        jobType: "",
        location: "Remote",
        dateRange: "April 2024 – Present",
        description:
            "InLuna is a behavior-based phishing detection, intelligent insights, and micro-training platform utilizing ML-based detection engine all from one lightweight browser extension.",
        responsibilities: [
            "Built and deployed a real-time MERN dashboard using WebSockets to stream phishing URLs detected by an ML model, cutting manual review time significantly.",
            "Developed key features for a browser extension that automates phishing detection workflows for end-users. Fine-tuned BERT-based models to enhance phishing URL classification accuracy.",
            "Fine-tuned BERT-based models to enhance phishing URL classification accuracy.",
            "Deployed scalable services on AWS EC2 with NGINX and optimized MongoDB queries for faster insight retrieval.",
            "Collaborated with designers to implement responsive React.js UI components based on Figma prototypes.",
        ],
    },
    {
        company: "Excellitude Pvt Ltd",
        logo: "/logos/excellitude.svg",
        accent: ["#e44c65", "#b1202b"],
        projectName: "Droolin",
        role: "NextJS Developer",
        dateRange: "May 2025 – Present",
        jobType: "",
        location: "Remote",
        description:
            "Droolin is a behavioral commerce layer for modern restaurants - unlocking performance, loyalty, and brand identity through menu intelligence.",
        responsibilities: [
            "Engineered a real-time behavioral analytics dashboard showing what guests view, order, and interact with, enabling automatic menu optimization for restaurants.",
            "Developed a no-login, no-signup user tracking system using FingerprintJS, enabling seamless anonymous analytics.",
            "Implemented a theme customization engine to support restaurant-specific branding and UI personalization.",
            "Managed MongoDB and AWS EC2 deployments, ensuring high availability and scalable service performance.",
        ],
    },
    {
        company: "IIT Bombay",
        logo: "/logos/iitbombay.svg",
        accent: ["#00a8e8", "#055a8c"],
        projectName: "Project Udaan",
        role: "Backend Developer",
        dateRange: "August 2023 – January 2024",
        jobType: "",
        location: "Powai",
        description:
            "The Udaan project enables translation of textbooks and learning materials, across English and all Indian languages.",
        responsibilities: [
            "Maintained and optimized OCR + translation pipelines for multilingual textbook processing across PDF, DOCX, PPTX, and XLSX formats, improving overall workflow reliability to 95%+.",
            "Diagnosed and resolved failure cases across preprocessing, OCR extraction, and translation stages, reducing manual correction overhead and stabilizing throughput on IIT-B servers.",
            "Designed and prototyped a DocTR-based OCR module, improving recognition accuracy on low-quality textbook scans and reducing preprocessing noise.",
            "Converted DocTR outputs into Tesseract-compatible formats, enabling seamless integration with the existing translation pipeline without requiring major refactoring.",
            "Merged disparate OCR code implementations from multiple developers into a unified component, improving text-color handling and image-recognition accuracy by ~75%.",
            "Built Python utilities (including a Pandas-driven XLSX translator) to streamline structured dataset processing for academic teams and batch translation workflows.",
            "Improved pipeline observability through enhanced logging, error tracking, and recovery logic, reducing unpredictable job failures.",
        ],
    },
];
