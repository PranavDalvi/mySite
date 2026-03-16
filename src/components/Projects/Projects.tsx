import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import { PanelsTopLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Batch from "../Batch/Batch";
import { techStackIcons } from "../../data/techStackMeta";

export default function Projects() {
  const topProjects = projects.slice(0, 6);

  return (
    <>
      <NewSectionTitle
        className="mt-10"
        icon={PanelsTopLeft}
        title="Projects I've Worked On (Top 6)"
      />

      <div className="px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
        {topProjects.map((p) => {
          const isExternal =
            typeof p.url === "string" &&
            (p.url.startsWith("http://") || p.url.startsWith("https://"));

          const cardContent = (
            <>
              <div className="rounded-xl overflow-hidden mb-3 border border-[rgba(146,180,232,0.3)]">
                <img
                  src={p.image}
                  alt={p.projectName}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="display-face text-xl font-semibold mb-1 text-[#edf5ff]">
                {p.projectName}
              </h3>
              <span className="mt-1 text-sm text-[#9fb4d6] ">
                {p.dateRange} | {p.for}
              </span>
              <p className="text-[#c7d5ea] text-sm mt-1 flex-1">
                {p.description}
              </p>
              <div className="flex flex-row flex-wrap gap-2 my-4 w-full">
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
              <span className="mt-3 font-semibold text-[#dff1ff]">
                {p.urlTitle}
              </span>
            </>
          );

          if (isExternal) {
            return (
              <a
                key={p.projectName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full transperent-card rounded-2xl shadow-[0_18px_34px_rgba(3,9,18,0.46)] border border-[rgba(146,180,232,0.28)] p-4 flex flex-col hover:translate-y-[-2px] transition-transform duration-200"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <Link
              key={p.projectName}
              to={p.url || "#"}
              className="group w-full transperent-card rounded-2xl shadow-[0_18px_34px_rgba(3,9,18,0.46)] border border-[rgba(146,180,232,0.28)] p-4 flex flex-col hover:translate-y-[-2px] transition-transform duration-200"
            >
              {cardContent}
            </Link>
          );
        })}
      </div>
      {projects.length > 6 && (
        <div className="px-4 mt-6 flex justify-center">
          <Link
            to={"/projects"}
            className="px-4 py-2.5 bg-gradient-to-r from-[#7fd0ff] to-[#9df7e0] text-[#071322] rounded-xl font-semibold shadow-[0_10px_25px_rgba(32,118,176,0.35)] hover:translate-y-[-1px] transition-transform duration-200"
          >
            View all projects
          </Link>
        </div>
      )}
    </>
  );
}
