import React from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import shastraImage from "../../assets/projects/sh-astra-pic.webp";
import Batch from "../../components/Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";
import { Footer } from "../../components/Footer/Footer";
import {
  ShieldCheck,
  Layers,
  FileSpreadsheet,
  CheckCircle2,
  BrainCircuit,
  PieChart,
  ClipboardList,
  Info,
} from "lucide-react";

const shastraTech = [
  "Next.js",
  "MongoDB",
  "Tailwind CSS",
];

const ShAstra: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHeader
        title="SH+ASTRA"
        backTo="/projects"
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-10 leading-relaxed">
        {/* Header / Hero */}
        <section className="text-center space-y-4">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(145,189,248,0.35)] bg-[rgba(18,34,56,0.58)] text-xs uppercase tracking-[0.16em] text-[#a9d9ff]">
            Excellitude Pvt Ltd &bull; Full Stack Developer
          </span>
          <h1 className="display-face text-3xl md:text-5xl font-bold text-[#edf5ff] leading-tight">
            Enterprise Cybersecurity Maturity & Risk Assessment Platform
          </h1>
          <p className="text-[#c7d5ea] text-base md:text-lg max-w-2xl mx-auto">
            An enterprise-grade cybersecurity posture evaluation platform assessing organizations against the NIST Cybersecurity Framework 2.0 with AI-enhanced risk reporting and remediation roadmaps.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {shastraTech.map((t) => {
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
            src={shastraImage}
            alt="SH+ASTRA Cyber Risk Assessment Platform Preview"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Overview & Abstract */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <ShieldCheck className="w-6 h-6 text-[#7fd0ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Project Overview & Abstract</h2>
          </div>
          <p className="text-[#c7d5ea] leading-relaxed">
            Engineered at <strong className="text-white">Excellitude Pvt Ltd</strong>, SH+ASTRA simplifies and accelerates enterprise cybersecurity maturity assessments. Transforming cumbersome audit spreadsheets into an interactive SaaS platform, SH+ASTRA systematically benchmarks an organization against the 6 core pillars of the <strong className="text-white">NIST Cybersecurity Framework 2.0</strong> (Govern, Identify, Protect, Detect, Respond, Recover).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <div className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-[#8ed8ff]" />
                <h3 className="font-semibold text-[#8ed8ff] text-base">NIST CSF 2.0 Audit Workflow</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Interactive audit questionnaires mapping controls to NIST categories, subcategories, implementation tiers, and organizational profiles.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4 text-[#9df7e0]" />
                <h3 className="font-semibold text-[#9df7e0] text-base">AI-Enhanced Executive Reports</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Automated risk scoring algorithms that calculate residual risk scores, maturity ratings, and generate executive summaries with remediation steps.
              </p>
            </div>
          </div>
        </section>

        {/* Key Engineering Responsibilities */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Layers className="w-6 h-6 text-[#9df7e0]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Key Responsibilities & Engineering Contributions</h2>
          </div>

          <ul className="space-y-3 text-[#c7d5ea]">
            {[
              "Architected and implemented responsive Next.js frontend pages and API routes for multi-stage cybersecurity risk assessment workflows.",
              "Designed flexible MongoDB data models to store complex hierarchical NIST CSF 2.0 functions, categories, subcategories, question rubrics, and organizational audit records.",
              "Engineered risk-scoring algorithms to compute domain maturity grades (Tier 1 to Tier 4) and residual risk indices based on audit inputs.",
              "Developed AI-assisted reporting modules synthesizing raw assessment answers into high-level executive summaries and prioritized remediation roadmaps.",
              "Designed an intuitive, accessible UI with Tailwind CSS to present dense compliance matrices and score breakdowns cleanly.",
            ].map((resp, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#86d6ff] flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Core Pillars & Features */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <PieChart className="w-6 h-6 text-[#bfa4ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Evaluation Capabilities & Framework Coverage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-[#8ed8ff]" />
                <h3 className="font-semibold text-[#8ed8ff]">Hierarchical Scoring Engine</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm leading-relaxed">
                Aggregates question responses across Govern, Identify, Protect, Detect, Respond, and Recover to generate weighted compliance scores and gap visualizations.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-[#9df7e0]" />
                <h3 className="font-semibold text-[#9df7e0]">Remediation Roadmaps</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm leading-relaxed">
                Automatically identifies high-risk vulnerabilities and maps out phased remediation strategies prioritizing high-impact security controls.
              </p>
            </div>
          </div>
        </section>

        {/* Deployment / Offline Note */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Info className="w-6 h-6 text-[#8ef3df]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Project Status & Deployment Details</h2>
          </div>
          <p className="text-[#c7d5ea] text-sm md:text-base leading-relaxed">
            SH+ASTRA was built as an enterprise cybersecurity risk evaluation product during my time at <strong className="text-white">Excellitude Pvt Ltd</strong>. The assessment platform is currently offline and managed as internal enterprise software.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShAstra;
