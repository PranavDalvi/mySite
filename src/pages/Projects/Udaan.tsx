import React from "react";
import img1 from "../../assets/projects/Udaan/iitb.jpeg";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import Batch from "../../components/Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";
import { Footer } from "../../components/Footer/Footer";
import {
  BookOpen,
  Layers,
  Cpu,
  Award,
  ExternalLink,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

const udaanTech = [
  "Python",
  "Flask",
  "NumPy",
  "OpenCV",
  "Tesseract OCR",
  "Beautiful Soup 4",
  "NGROK",
];

const Udaan: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHeader
        title="Project Udaan"
        url="https://udaanproject.org/"
        backTo="/projects"
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-10 leading-relaxed">
        {/* Header / Hero */}
        <section className="text-center space-y-4">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(145,189,248,0.35)] bg-[rgba(18,34,56,0.58)] text-xs uppercase tracking-[0.16em] text-[#a9d9ff]">
            IIT Bombay &bull; Backend Developer Internship
          </span>
          <h1 className="display-face text-3xl md:text-5xl font-bold text-[#edf5ff] leading-tight">
            AI-Powered Multilingual Translation & OCR Pipeline
          </h1>
          <p className="text-[#c7d5ea] text-base md:text-lg max-w-2xl mx-auto">
            Breaking language barriers across India by translating complex academic books and technical literature into native languages using AI & OCR.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {udaanTech.map((t) => {
              const meta = techStackIcons[t];
              return (
                <Batch
                  key={t}
                  title={t}
                  icon={meta?.icon}
                  backgroundColor={meta?.color}
                />
              );
            })}
          </div>
        </section>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden border border-[rgba(145,182,232,0.3)] shadow-[0_20px_45px_rgba(4,9,18,0.5)]">
          <img
            src={img1}
            alt="IIT Bombay Campus"
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>

        {/* Abstract & Overview */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <BookOpen className="w-6 h-6 text-[#7fd0ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Project Overview & Abstract</h2>
          </div>
          <p className="text-[#c7d5ea] leading-relaxed">
            Project Udaan is a flagship initiative at <strong className="text-white">IIT Bombay</strong> focused on democratizing education by translating higher-education engineering textbooks, academic literature, and official circulars from English into Indian languages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <h3 className="font-semibold text-[#8ed8ff] text-base">LEAP OCR Pipeline</h3>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Advanced Optical Character Recognition engine capable of extracting typography, layout structures, math formulae, and embedded figures across Indian scripts.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <h3 className="font-semibold text-[#9df7e0] text-base">Multilingual Translation Engine</h3>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Domain-specialized neural machine translation models paired with a proprietary post-editing tool for subject matter expert validation.
              </p>
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Layers className="w-6 h-6 text-[#9df7e0]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Key Responsibilities & Engineering Contributions</h2>
          </div>

          <ul className="space-y-3 text-[#c7d5ea]">
            {[
              "Maintained Project Udaan's Python/Flask OCR and translation pipelines for PDF, DOCX, PPTX, and XLSX processing with 95%+ reliability.",
              "Refactored Project Udaan's OCR logic into a unified Flask module, improving text-color handling and image recognition accuracy by ~75%.",
              "Developed Python batch-processing utilities for Project Udaan, including Pandas-based XLSX translation tools for automated structured data transformations.",
              "Diagnosed and resolved critical bottlenecks across multi-stage backend worker nodes, minimizing pipeline downtime during batch operations.",
              "Migrated translation services and pipelines across distributed server environments with zero document loss.",
            ].map((resp, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#86d6ff] flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Skills & Takeaways */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Cpu className="w-6 h-6 text-[#bfa4ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Skills & Learnings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <h3 className="font-semibold text-[#8ed8ff]">Technical Mastery</h3>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Deep hands-on experience in backend distributed pipeline architecture, server administration, OpenCV image processing, and high-volume data handling.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <h3 className="font-semibold text-[#9df7e0]">Collaboration & Outreach</h3>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Worked closely with professors, research scholars, and linguists. Demonstrated Project Udaan's capabilities to students and faculty at TechFest 2024.
              </p>
            </div>
          </div>
        </section>

        {/* Acknowledgements & Links */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <HeartHandshake className="w-6 h-6 text-[#8ef3df]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Acknowledgements & Related Coverage</h2>
          </div>
          <p className="text-[#c7d5ea] text-sm md:text-base leading-relaxed">
            I extend my heartfelt gratitude to Prof. Ganesh Ramakrishnan for his visionary leadership, and to supervisors Pranita Harpale and Anuja Dumada for their continuous mentorship throughout the internship.
          </p>

          <div className="pt-3 flex flex-wrap gap-4">
            <a
              href="https://udaanproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7fd0ff] to-[#9df7e0] text-[#071322] font-semibold shadow-[0_8px_20px_rgba(32,118,176,0.35)] hover:translate-y-[-1px] transition-transform text-sm"
            >
              <ExternalLink size={16} /> Official Udaan Website
            </a>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7146041201681494017/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl transperent-card text-[#8ed8ff] hover:text-white border border-[rgba(145,182,232,0.3)] hover:border-[rgba(145,182,232,0.6)] font-semibold transition-all text-sm"
            >
              <Award size={16} /> View Techfest Showcase on LinkedIn
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Udaan;
