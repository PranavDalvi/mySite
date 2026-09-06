import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Batch from "../../components/Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import { Footer } from "../../components/Footer/Footer";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  "All",
  "IIT Bombay",
  "Excellitude",
  "Research",
  "Personal & Tools",
  "Machine Learning",
  "Cybersecurity",
  "Full Stack",
] as const;

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filterProject = (p: typeof projects[0], cat: string) => {
    if (cat === "All") return true;
    if (cat === "IIT Bombay") {
      return p.for?.toLowerCase().includes("iit bombay");
    }
    if (cat === "Excellitude") {
      return p.for?.toLowerCase().includes("excellitude");
    }
    if (cat === "Research") {
      return (
        p.for?.toLowerCase().includes("research") ||
        p.projectName.toLowerCase().includes("dvimaya")
      );
    }
    if (cat === "Personal & Tools") {
      return (
        p.for?.toLowerCase().includes("self") ||
        p.for?.toLowerCase().includes("assignment") ||
        p.for?.toLowerCase().includes("personal")
      );
    }
    if (cat === "Machine Learning") {
      return p.techStack?.some((t) =>
        ["TensorFlow", "scikit-learn", "NumPy", "OpenCV", "Machine Learning"].includes(t)
      );
    }
    if (cat === "Cybersecurity") {
      return (
        p.projectName.toLowerCase().includes("malware") ||
        p.projectName.toLowerCase().includes("phishing") ||
        p.projectName.toLowerCase().includes("risk") ||
        p.description?.toLowerCase().includes("cybersecurity")
      );
    }
    if (cat === "Full Stack") {
      return p.techStack?.some((t) =>
        ["React", "Next.js", "Node.js", "Express", "MongoDB"].includes(t)
      );
    }
    return true;
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => filterProject(p, selectedCategory));
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHeader title="All Projects & Systems" backTo="/" />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-white tracking-tight">
            Work & Architecture Archive
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            A comprehensive collection of production systems, research papers, and web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-sky-400 text-slate-950 font-bold shadow-md scale-[1.02]"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:border-white/20 border border-white/10"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((p) => {
            const isExternal =
              typeof p.url === "string" &&
              (p.url.startsWith("http://") || p.url.startsWith("https://"));

            const cardContent = (
              <>
                <div className="rounded-xl overflow-hidden mb-4 border border-white/10 bg-slate-950/80 relative group-hover:border-sky-500/30 transition-all">
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
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {p.projectName}
                  </h3>
                  <span className="text-slate-400 group-hover:text-sky-300 transition-colors">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400 mb-2">
                  {p.dateRange}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mb-4 flex-1 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                  {p.techStack?.map((t) => {
                    const meta = techStackIcons[t];
                    return (
                      <Batch
                        key={p.projectName + t}
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
      </main>

      <Footer />
    </div>
  );
}
