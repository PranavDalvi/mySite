import React from "react";
import { Radio, Cpu, Server, Compass } from "lucide-react";
import ValueCard from "./ValueCard";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";

const Values = () => {
  const principlesData = [
    {
      tag: "SYSTEM DESIGN",
      icon: <Radio className="w-6 h-6 text-sky-400" />,
      title: "Low-Latency & Event-Driven",
      description:
        "Designing real-time WebSocket pipelines, Redis/Celery background task orchestration, and server-side pagination to sustain high-throughput telemetry with <200ms P95 latencies.",
    },
    {
      tag: "AI & ML SYSTEMS",
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Dynamic LLM Orchestration",
      description:
        "Architecting dynamic model loading/unloading with vLLM, IndicTrans2, and Gemma to maximize GPU memory efficiency and enable concurrent multilingual workloads.",
    },
    {
      tag: "INFRASTRUCTURE & RELIABILITY",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: "Production Resilience & DevOps",
      description:
        "Standardizing AWS EC2 + NGINX environments, automated document parsing pipelines with 95%+ uptime, and continuous load benchmarking via Locust.",
    },
  ];

  return (
    <section className="my-14 md:my-20">
      <NewSectionTitle
        className="mb-4"
        icon={Compass}
        title="Architecture & Philosophy"
      />
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Engineering Principles
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-2">
          How I approach system scalability, AI inference orchestration, and cloud reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 md:px-0">
        {principlesData.map((item, index) => (
          <ValueCard
            key={index}
            tag={item.tag}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Values;
