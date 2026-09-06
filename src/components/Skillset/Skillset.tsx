import React from "react";
import { Cpu, Server, Cloud, Layout, Code2 } from "lucide-react";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";

interface SkillCategory {
  title: string;
  tag: string;
  icon: React.ReactNode;
  accent: string;
  skills: string[];
  summary: string;
}

export const Skillset = () => {
  const categories: SkillCategory[] = [
    {
      title: "AI & Machine Learning",
      tag: "INFERENCE & NLP",
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      accent: "from-sky-500/20 to-sky-500/0",
      skills: [
        "vLLM",
        "Gemma",
        "IndicTrans2",
        "PyTorch",
        "CNN Architectures",
        "OCR Pipelines",
        "Pandas",
        "Feature Engineering",
      ],
      summary:
        "Specialized in dynamic LLM serving, GPU VRAM allocation, multilingual translation pipelines, and document OCR recognition.",
    },
    {
      title: "Backend & Systems",
      tag: "DISTRIBUTED & REALTIME",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      accent: "from-emerald-500/20 to-emerald-500/0",
      skills: [
        "Node.js",
        "Express.js",
        "Flask",
        "WebSockets",
        "Celery Queues",
        "REST API Design",
        "MongoDB",
        "MySQL",
      ],
      summary:
        "Building sub-200ms real-time streaming architectures, event-driven pipelines, and high-throughput background worker clusters.",
    },
    {
      title: "Cloud & Reliability",
      tag: "INFRASTRUCTURE & DEVOPS",
      icon: <Cloud className="w-5 h-5 text-indigo-400" />,
      accent: "from-indigo-500/20 to-indigo-500/0",
      skills: [
        "AWS EC2",
        "NGINX",
        "Linux Server Mgmt",
        "Locust Load Testing",
        "Postman",
        "Git & GitHub",
        "CI/CD Basics",
      ],
      summary:
        "Standardizing production EC2/NGINX environments, reverse proxies, and P95/P99 latency benchmarking under tested loads.",
    },
    {
      title: "Frontend & Interfaces",
      tag: "CLIENT-SIDE SYSTEMS",
      icon: <Layout className="w-5 h-5 text-teal-400" />,
      accent: "from-teal-500/20 to-teal-500/0",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Client-Side PDF Engines",
      ],
      summary:
        "Crafting responsive security analytics dashboards, dynamic client-side document generators, and accessible user interfaces.",
    },
  ];

  return (
    <div className="mt-12 md:mt-20 px-4 md:px-0">
      <NewSectionTitle
        className="mb-4"
        icon={Code2}
        title="Technical Domain Matrix"
      />
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Core Technical Capabilities
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-2">
          Specialized tools, frameworks, and infrastructure architectures I work with in production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="transperent-card p-6 md:p-7 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 group-hover:border-sky-500/30 transition-all">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5">
                  {cat.tag}
                </span>
              </div>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-5">
                {cat.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/80 text-slate-300 border border-white/[0.08] hover:border-sky-400/40 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
