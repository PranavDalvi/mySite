import { motion } from "framer-motion";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import { PanelsTopLeft } from "lucide-react";
import inlunaImage from "../../assets/projects/InLuna.jpeg";
import droolinImage from "../../assets/projects/Droolin.jpeg";
import udaanImage from "../../assets/projects/Project-Udaan.webp";
import dvimayaImage from "../../assets/projects/Dvimaya/dvimaya-1.png";

const projects = [
  {
    title: "Dvimaya - Malware Detection using ML & Binary Visualization",
    description:
      "This project implements a malware detection system using machine learning and binary visualization techniques. It aims to classify .exe files as safe or malicious based on visualized binary patterns. This repository includes the dataset and model used for the final year MSc in Computer Science research project.",
    image: dvimayaImage,
    url: "/mySite/projects/dvimaya",
    urlTitle: "View",
    timeline: "OCT 2024 - MAY 2025",
    for: "Master's Research Project",
    jobType: "Independent",
  },
  {
    title: "InLuna - Advanced Phishing Detection",
    description:
      "InLuna is a behavior-based phishing detection, intelligent insights, and micro-training platform utilizing ML-based detection engine all from one lightweight browser extension.",
    image: inlunaImage,
    url: "https://www.excellitude.com",
    urlTitle: "Coming Soon",
    timeline: "APR 2024 - Present",
    for: "Excellitude pvt ltd",
    jobType: "Part-time",
  },
  {
    title: "Droolin - Behavioral Commerce for Restaurants",
    description:
      "Droolin is a behavioral commerce layer for modern restaurants - unlocking performance, loyalty, and brand identity through menu intelligence.",
    image: droolinImage,
    url: "https://www.excellitude.com",
    urlTitle: "Coming Soon",
    timeline: "MAY 2025 - Present",
    for: "Excellitude pvt ltd",
    jobType: "Part-time",
  },
  {
    title: "Project Udaan - AI-Powered Translation Platform",
    description:
      "The Udaan project enables translation of textbooks and learning materials, across English and all Indian languages. It leverages AI and ML technologies to provide high-quality translations, making education more accessible to students nationwide.",
    image: udaanImage,
    url: "https://udaanproject.org",
    urlTitle: "View",
    timeline: "AUG 2023 - JAN 2024",
    for: "IIT Bombay",
    jobType: "Internship",
  },
];

export default function Projects() {
  return (
    <>
      <NewSectionTitle
        className="mt-10"
        icon={PanelsTopLeft}
        title="Projects I've Worked On"
      />

      <div className="px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full transperent-card rounded-xl shadow-xl p-4 flex flex-col"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
            <span className="mt-1 text-sm text-gray-500 ">
              {p.timeline} | {p.for} | {p.jobType}
            </span>
            <p className="text-gray-400 text-sm flex-1">{p.description}</p>

            <span className="mt-3 font-semibold">{p.urlTitle}</span>
          </motion.a>
        ))}
      </div>
    </>
  );
}
