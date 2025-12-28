import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import { PanelsTopLeft } from "lucide-react";
import { Link } from "react-router";
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
              <div className="rounded-lg overflow-hidden mb-3">
                <img
                  src={p.image}
                  alt={p.projectName}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{p.projectName}</h3>
              <span className="mt-1 text-sm text-gray-500 ">
                {p.dateRange} | {p.for}
              </span>
              <p className="text-gray-400 text-sm flex-1">{p.description}</p>
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
              <span className="mt-3 font-semibold">{p.urlTitle}</span>
            </>
          );

          if (isExternal) {
            return (
              <a
                key={p.projectName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full transperent-card rounded-xl shadow-xl p-4 flex flex-col"
              >
                {cardContent}
              </a>
            );
          }

          return (
            <Link
              key={p.projectName}
              to={p.url || "#"}
              className="w-full transperent-card rounded-xl shadow-xl p-4 flex flex-col"
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
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 shadow"
          >
            View all projects
          </Link>
        </div>
      )}
    </>
  );
}
