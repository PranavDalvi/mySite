import React from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import droolinImage from "../../assets/projects/Droolin-pic.webp";
import Batch from "../../components/Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";
import { Footer } from "../../components/Footer/Footer";
import {
  Utensils,
  Layers,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Server,
  Fingerprint,
  Info,
} from "lucide-react";

const droolinTech = [
  "Next.js",
  "MongoDB",
  "AWS",
  "Tailwind CSS",
  "NGINX",
];

const Droolin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHeader
        title="Droolin"
        backTo="/projects"
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-10 leading-relaxed">
        {/* Header / Hero */}
        <section className="text-center space-y-4">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(145,189,248,0.35)] bg-[rgba(18,34,56,0.58)] text-xs uppercase tracking-[0.16em] text-[#a9d9ff]">
            Excellitude Pvt Ltd &bull; Next.js Developer
          </span>
          <h1 className="display-face text-3xl md:text-5xl font-bold text-[#edf5ff] leading-tight">
            Behavioral Commerce & Menu Intelligence for Restaurants
          </h1>
          <p className="text-[#c7d5ea] text-base md:text-lg max-w-2xl mx-auto">
            Droolin is a behavioral commerce layer for modern restaurants — unlocking performance, customer loyalty, and brand identity through menu intelligence and guest analytics.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {droolinTech.map((t) => {
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
            src={droolinImage}
            alt="Droolin Platform Preview"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Overview & Abstract */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Utensils className="w-6 h-6 text-[#7fd0ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Project Overview & Abstract</h2>
          </div>
          <p className="text-[#c7d5ea] leading-relaxed">
            Developed at <strong className="text-white">Excellitude Pvt Ltd</strong>, Droolin bridges the gap between physical restaurant dining and digital intelligence. Rather than offering a plain PDF or generic QR menu, Droolin provides an interactive menu experience that captures granular visitor engagement metrics, helping managers understand diner interest, optimize high-margin dishes, and personalize restaurant themes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#8ed8ff]" />
                <h3 className="font-semibold text-[#8ed8ff] text-base">Menu Intelligence Dashboard</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Real-time visibility into dish view counts, dwell times, and order intent to identify trending items and optimize menu layouts.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <div className="flex items-center gap-2">
                <Fingerprint className="w-4 h-4 text-[#9df7e0]" />
                <h3 className="font-semibold text-[#9df7e0] text-base">Anonymous Guest Tracking</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                No-login, no-signup session tracking powered by browser fingerprinting to understand repeat visits and table trends without collecting intrusive personal data.
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
              "Owned backend architecture for Droolin from schema design through AWS production deployment as the sole backend engineer.",
              "Engineered a real-time behavioral analytics dashboard showing what guests view, order, and interact with, enabling automatic menu optimization for restaurants.",
              "Developed a no-login, no-signup user tracking system using FingerprintJS, enabling seamless anonymous analytics without adding friction for dining guests.",
              "Implemented a flexible theme customization engine allowing restaurants to tailor colors, typography, and imagery to match their brand identity.",
              "Cut deployment setup time by ~50% by standardizing AWS EC2 + NGINX environments and establishing deployment runbooks.",
              "Managed MongoDB schemas and AWS EC2 deployments with NGINX, ensuring high availability, reliable caching, and scalable service performance.",
            ].map((resp, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#86d6ff] flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Technical Features */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Sparkles className="w-6 h-6 text-[#bfa4ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Key System Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8ed8ff]" />
                <h3 className="font-semibold text-[#8ed8ff]">Theme Customization Engine</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm leading-relaxed">
                Dynamic CSS variable injection enabling each restaurant partner to create white-label branding, customized food category layouts, and high-fidelity visuals.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-[#9df7e0]" />
                <h3 className="font-semibold text-[#9df7e0]">AWS & NGINX Infrastructure</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm leading-relaxed">
                Deployed on AWS EC2 behind an optimized NGINX reverse proxy with aggressive asset caching, ensuring low latency on mobile cellular networks.
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
            Droolin was developed as a commercial hospitality SaaS product during my tenure at <strong className="text-white">Excellitude Pvt Ltd</strong>. The production web platform and customer deployments are currently offline and maintained as internal proprietary technology.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Droolin;
