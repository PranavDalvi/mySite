import React from "react";
import { resumeProfile, experiences } from "../../data/resumeData";
import { ExternalLink, Mail, MapPin, Globe, Linkedin, Github } from "lucide-react";

interface ResumeDocumentProps {
  forPrint?: boolean;
}

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ forPrint = false }) => {
  return (
    <div
      id="printable-resume"
      className={`bg-white text-[#1a202c] font-sans leading-normal selection:bg-blue-100 ${
        forPrint ? "w-full p-0" : "max-w-[850px] mx-auto p-4 sm:p-8 md:p-12 shadow-2xl rounded-xl border border-gray-200"
      }`}
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-5 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
          {resumeProfile.name}
        </h1>
        <p className="text-lg font-semibold text-gray-700 mt-0.5">{resumeProfile.title}</p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 mt-2.5 text-xs text-gray-600 font-medium">
          <span className="inline-flex items-center gap-1">
            <MapPin size={13} className="text-gray-500" />
            {resumeProfile.location}
          </span>
          <span>&bull;</span>
          <a
            href={`mailto:${resumeProfile.email}`}
            className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Mail size={13} className="text-gray-500" />
            {resumeProfile.email}
          </a>
          <span>&bull;</span>
          <a
            href={resumeProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <Linkedin size={13} />
            {resumeProfile.linkedin}
          </a>
          <span>&bull;</span>
          <a
            href={resumeProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <Github size={13} />
            {resumeProfile.github}
          </a>
          <span>&bull;</span>
          <a
            href={resumeProfile.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-700 hover:underline"
          >
            <Globe size={13} />
            {resumeProfile.portfolio}
          </a>
        </div>
      </header>

      {/* Technical Skills */}
      <section className="mb-5">
        <h2 className="text-sm font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2.5">
          Technical Skills
        </h2>
        <div className="space-y-1 text-xs text-gray-800 leading-relaxed">
          {resumeProfile.skillsCategories.map((group) => (
            <div key={group.category} className="flex flex-col sm:flex-row">
              <span className="font-bold text-gray-900 w-36 flex-shrink-0">
                &bull; {group.category}:
              </span>
              <span className="text-gray-700 flex-1">{group.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-5">
        <h2 className="text-sm font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
          Professional Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <span className="font-bold text-sm text-gray-900">{exp.company}</span>
                  <span className="text-xs text-gray-700">
                    {" "}&mdash; <span className="font-semibold text-gray-800">{exp.role}</span>
                    {exp.projectName && (
                      <span className="font-bold text-gray-900"> ({exp.projectName})</span>
                    )}
                  </span>
                </div>
                <div className="text-xs text-gray-600 font-semibold sm:text-right">
                  <span>{exp.dateRange}</span>
                  {exp.location && <span className="text-gray-500 font-normal"> | {exp.location}</span>}
                </div>
              </div>

              <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700 leading-relaxed">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>{renderFormattedText(resp)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects & Research */}
      <section className="mb-5">
        <h2 className="text-sm font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
          Projects & Research
        </h2>
        <div className="space-y-3.5">
          {/* Dvimaya Research Project */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-bold text-sm text-gray-900">
                  Dvimaya &mdash; ML-Powered Malware Detection System
                </span>
              </div>
              <span className="text-xs text-gray-600 font-semibold sm:text-right">October 2024 – May 2025</span>
            </div>
            <div className="flex flex-wrap gap-x-3 text-[11px] text-blue-700 font-medium pb-0.5">
              <a
                href="https://doi.org/10.53032/tvcr/2025.v7n2.45"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-0.5"
              >
                Paper: doi.org/10.53032/tvcr/2025.v7n2.45 <ExternalLink size={10} />
              </a>
              <span>&bull;</span>
              <a
                href="https://github.com/PranavDalvi/Dvimaya-App"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-0.5"
              >
                GitHub: github.com/PranavDalvi/Dvimaya-App <ExternalLink size={10} />
              </a>
            </div>
            <ul className="list-disc ml-4 space-y-1 text-xs text-gray-700 leading-relaxed">
              <li>
                {renderFormattedText(
                  "Built an end-to-end Python-based malware detection system, converting **executable binaries into structured representations** and engineering feature extraction pipelines with **CNN models achieving ~84% classification accuracy** across benign and malicious samples."
                )}
              </li>
              <li>
                {renderFormattedText(
                  "Integrated trained ML models into a Python application for **real-time inference and prediction**, with focus on reproducibility, evaluation, and failure analysis."
                )}
              </li>
              <li>
                {renderFormattedText(
                  "Published research in **The Voice of Creative Research (2025)** and awarded **3rd place in an inter-college research paper presentation**."
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-bold tracking-wider text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2.5">
          Education
        </h2>
        <div className="space-y-2">
          {resumeProfile.education.map((edu, eIdx) => (
            <div key={eIdx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <div>
                <span className="font-bold text-gray-900">{edu.degree}</span>
                <span className="text-gray-700"> &mdash; {edu.institution}</span>
                <span className="font-semibold text-gray-800"> ({edu.score})</span>
              </div>
              <span className="text-gray-600 font-semibold sm:text-right">{edu.dateRange}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeDocument;
