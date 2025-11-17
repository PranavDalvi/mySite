import { motion } from "framer-motion";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import { PanelsTopLeft } from "lucide-react";

const projects = [
  {
    title: "InLuna - Advanced Phishing Detection",
    description:
      "InLuna is a behavior-based phishing detection, intelligent insights, and micro-training platform utilizing ML-based detection engine all from one lightweight browser extension.",
    image: "src/assets/projects/InLuna.jpeg",
    url: "https://www.excellitude.com",
    urlTitle: "Coming Soon",
    timeline: "APR 2024 - PRESENT",
    for: "Excellitude pvt ltd",
    jobType: "Part-time",
  },
  {
    title: "Droolin - Behavioral Commerce for Restaurants",
    description:
      "Droolin is a behavioral commerce layer for modern restaurants - unlocking performance, loyalty, and brand identity through menu intelligence.",
    image: "src/assets/projects/Droolin.jpeg",
    url: "https://www.excellitude.com",
    urlTitle: "Coming Soon",
    timeline: "MAY 2025 - PRESENT",
    for: "Excellitude pvt ltd",
    jobType: "Part-time",
  },
  {
    title: "Project Udaan - AI-Powered Translation Platform",
    description:
      "The Udaan project enables translation of textbooks and learning materials, across English and all Indian languages. It leverages AI and ML technologies to provide high-quality translations, making education more accessible to students nationwide.",
    image: "src/assets/projects/Project-Udaan.webp",
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
      <div className="md:hidden px-4">
        <div className="grid grid-cols-1 gap-4">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.url}
              className="w-full transperent-card rounded-xl shadow-xl p-4 block"
              whileHover={{ scale: 1.02 }}
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
              <p className="text-gray-400 text-sm">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Tablet/Desktop: responsive grid showing all projects */}
      <div className="hidden md:grid mt-10 gap-6 grid-cols-2 lg:grid-cols-3 items-stretch">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.url}
            target="_blank"
            className="transperent-card rounded-xl shadow-xl p-4 flex flex-col hover:translate-y-[-2px] transition-transform"
            whileHover={{ scale: 1.01 }}
          >
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
            <p className="text-gray-400 text-sm flex-1">{p.description}</p>
            <span className="mt-1 text-sm text-gray-500">
              {p.timeline} | {p.for} | {p.jobType}
            </span>
            <span className="mt-3 font-semibold">{p.urlTitle}</span>
          </motion.a>
        ))}
      </div>
    </>
  );
}
