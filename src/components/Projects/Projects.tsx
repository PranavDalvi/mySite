import { useState, useMemo } from "react";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import { PanelsTopLeft, ArrowUpRight, GraduationCap, Briefcase, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Batch from "../Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";
import type { Project } from "../../types/project";

const ORG_FILTERS = [
  { id: "Top Six", label: "Top Six", icon: PanelsTopLeft },
  { id: "IIT Bombay", label: "IIT Bombay", icon: GraduationCap },
  { id: "Excellitude", label: "Excellitude", icon: Briefcase },
  { id: "Research", label: "Research", icon: BookOpen },
  { id: "Personal", label: "Personal & Tools", icon: User },
] as const;

export default function Projects() {
  const [selectedOrg, setSelectedOrg] = useState<string>("Top Six");

  const filterProject = (p: Project, category: string) => {
    if (category === "Top Six") return true;
    if (category === "IIT Bombay") {
      return p.for?.toLowerCase().includes("iit bombay");
    }
    if (category === "Excellitude") {
      return p.for?.toLowerCase().includes("excellitude");
    }
    if (category === "Research") {
      return (
        p.for?.toLowerCase().includes("research") ||
        p.projectName.toLowerCase().includes("dvimaya")
      );
    }
    if (category === "Personal") {
      return (
        p.for?.toLowerCase().includes("self") ||
        p.for?.toLowerCase().includes("assignment") ||
        p.for?.toLowerCase().includes("personal")
      );
    }
    return true;
  };

  const filteredProjects = useMemo(() => {
    if (selectedOrg === "Top Six") {
      return projects.slice(0, 6);
    }
    return projects.filter((p) => filterProject(p, selectedOrg));
  }, [selectedOrg]);

  return (
    <div className="mt-14 md:mt-24">
      <NewSectionTitle
        className="mb-4"
        icon={PanelsTopLeft}
        title="Featured Systems & Projects"
      />

      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Production Work & Research
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-2">
          Filter by organization, enterprise engineering, research publications, or open source tools.
        </p>
      </div>

      {/* Organization Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 px-4">
        {ORG_FILTERS.map((tab) => {
          const active = selectedOrg === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setSelectedOrg(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                active
                  ? "bg-sky-400 text-slate-950 font-bold shadow-md scale-[1.02]"
                  : "bg-slate-900/80 text-slate-300 hover:text-white hover:border-white/20 border border-white/10"
              }`}
            >
              <Icon size={14} className={active ? "text-slate-950" : "text-sky-400"} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.map((p) => {
          const isExternal =
            typeof p.url === "string" &&
            (p.url.startsWith("http://") || p.url.startsWith("https://"));

          const cardContent = (
            <>
              <div className="rounded-xl overflow-hidden mb-4 border border-white/10 relative group-hover:border-sky-500/30 transition-all">
                <img
                  src={p.image}
                  alt={p.projectName}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                {p.for && (
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-slate-950/80 text-sky-300 border border-white/10 backdrop-blur-md">
                    {p.for}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {p.projectName}
                </h3>
                <span className="text-slate-400 group-hover:text-sky-300 transition-colors">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400 mb-2.5">
                {p.dateRange}
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                {p.techStack?.map((t) => {
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
            </>
          );

          if (isExternal) {
            return (
              <a
                key={p.projectName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full transperent-card rounded-2xl border border-white/10 p-5 flex flex-col hover:border-sky-500/30 hover:translate-y-[-2px] transition-all duration-200"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <Link
              key={p.projectName}
              to={p.url || "#"}
              className="group w-full transperent-card rounded-2xl border border-white/10 p-5 flex flex-col hover:border-sky-500/30 hover:translate-y-[-2px] transition-all duration-200"
            >
              {cardContent}
            </Link>
          );
        })}
      </div>

      <div className="px-4 mt-8 flex justify-center">
        <Link
          to={"/projects"}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-sky-500/30 rounded-xl font-medium text-sm transition-all shadow-sm inline-flex items-center gap-2"
        >
          View all {projects.length} projects archive &rarr;
        </Link>
      </div>
    </div>
  );
}
