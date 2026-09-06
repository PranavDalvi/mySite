import React from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import inlunaImage from "../../assets/projects/InLuna-pic.webp";
import Batch from "../../components/Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";
import { Footer } from "../../components/Footer/Footer";
import {
  ShieldAlert,
  Cpu,
  Layers,
  CheckCircle2,
  Server,
  Activity,
  Lock,
  Info,
} from "lucide-react";

const inlunaTech = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "AWS",
  "Tailwind CSS",
  "NGINX",
];

const InLuna: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHeader
        title="InLuna"
        backTo="/projects"
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-10 leading-relaxed">
        {/* Header / Hero */}
        <section className="text-center space-y-4">
          <span className="inline-flex px-3.5 py-1 rounded-full border border-[rgba(145,189,248,0.35)] bg-[rgba(18,34,56,0.58)] text-xs uppercase tracking-[0.16em] text-[#a9d9ff]">
            Excellitude Pvt Ltd &bull; Software Engineer
          </span>
          <h1 className="display-face text-3xl md:text-5xl font-bold text-[#edf5ff] leading-tight">
            Behavior-Based Phishing Detection & Telemetry Platform
          </h1>
          <p className="text-[#c7d5ea] text-base md:text-lg max-w-2xl mx-auto">
            A behavior-based phishing detection, intelligent insights, and micro-training platform utilizing an ML-based detection engine integrated into a lightweight browser extension.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {inlunaTech.map((t) => {
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
            src={inlunaImage}
            alt="InLuna Platform Preview"
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Overview & Abstract */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <ShieldAlert className="w-6 h-6 text-[#7fd0ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Project Overview & Abstract</h2>
          </div>
          <p className="text-[#c7d5ea] leading-relaxed">
            InLuna was engineered at <strong className="text-white">Excellitude Pvt Ltd</strong> to address sophisticated zero-hour phishing attacks that evade conventional static URL blacklists. By inspecting real-time browser interactions, DOM mutations, and heuristic risk signals at the endpoint, InLuna provides proactive security alerts and in-the-moment user micro-training.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#8ed8ff]" />
                <h3 className="font-semibold text-[#8ed8ff] text-base">Behavioral Telemetry</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Lightweight extension engine analyzing link interactions, form inputs, and redirection chains in real time without compromising browsing latency.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-1.5">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#9df7e0]" />
                <h3 className="font-semibold text-[#9df7e0] text-base">ML-Driven Threat Engine</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm">
                Machine learning classification models that evaluate anomaly scores across domain typography, SSL metadata, and deceptive visual styling.
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
              "Owned backend architecture for InLuna from schema design through AWS production deployment as the sole backend engineer.",
              "Improved API performance by introducing server-side pagination and limiting database results to required records, reducing unnecessary data retrieval and improving responsiveness as dataset size increased.",
              "Designed and implemented real-time WebSocket communication for phishing alerts and analytics, replacing REST-based polling and achieving <200ms end-to-end latency under tested workloads, as measured through load testing.",
              "Cut deployment setup time by ~50% by standardizing AWS EC2 + NGINX environments and establishing deployment runbooks.",
              "Shipped stateless Node.js backend services and API endpoints powering a lightweight Chrome extension.",
              "Optimized database schemas, query patterns, and indexing strategies in MongoDB, significantly reducing data retrieval latencies.",
            ].map((resp, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#86d6ff] flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture & Infrastructure */}
        <section className="transperent-card p-6 md:p-8 rounded-2xl border border-[rgba(145,182,232,0.25)] shadow-[0_16px_34px_rgba(2,9,20,0.4)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[rgba(18,34,56,0.65)] border border-[rgba(145,189,248,0.25)]">
              <Server className="w-6 h-6 text-[#bfa4ff]" />
            </div>
            <h2 className="display-face text-2xl font-bold text-[#edf5ff]">Architecture & Infrastructure Highlights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#8ed8ff]" />
                <h3 className="font-semibold text-[#8ed8ff]">Real-Time Streaming Engine</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm leading-relaxed">
                Integrated WebSockets with Node.js and Express to instantly push high-severity threat incidents to administration consoles for immediate triage.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[rgba(10,22,41,0.6)] border border-[rgba(145,182,232,0.2)] space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#9df7e0]" />
                <h3 className="font-semibold text-[#9df7e0]">AWS & NGINX Reverse Proxy</h3>
              </div>
              <p className="text-[#c7d5ea] text-xs md:text-sm leading-relaxed">
                Configured secure upstream routing, rate-limiting, and SSL termination on AWS EC2, maintaining 99.9% uptime during peak ingestion events.
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
            InLuna was developed and operated as a proprietary enterprise cybersecurity product during my employment at <strong className="text-white">Excellitude Pvt Ltd</strong>. The live public web deployment and extension backend are currently offline and retained internally.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InLuna;
