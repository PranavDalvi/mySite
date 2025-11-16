import { motion } from "framer-motion";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import { PanelsTopLeft } from "lucide-react";

const projects = [
  {
    title: "Ryde - Ride Sharing App",
    description:
      "An app built with React Native, Expo, and TailwindCSS for a fast, user-friendly ride experience.",
    image: "src/assets/p1.png",
    url: "#",
  },
  {
    title: "BookWise - Library Platform",
    description: "A modern platform to manage and explore books with ease.",
    image: "src/assets/p2.png",
    url: "#",
  },
  {
    title: "YC Directory",
    description:
      "A showcase platform for YC startups, helping connect entrepreneurs and investors.",
    image: "src/assets/p3.png",
    url: "#",
  },
];

export default function Projects() {
  return (
    <>
      <NewSectionTitle
        className="mt-10"
        icon={PanelsTopLeft}
        title="Projects I've Worked On"
      />
      <div className="md:hidden px-4">
        <div className="grid grid-cols-1 gap-4">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.url}
              className="w-full transperent-card rounded-xl shadow-xl p-4 block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="rounded-lg overflow-hidden mb-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Tablet/Desktop: responsive grid showing all projects */}
      <div className="hidden md:grid mt-10 gap-6 grid-cols-2 lg:grid-cols-3 items-stretch">
        {projects.map((p) => (
          <motion.a
            key={p.title}
            href={p.url}
            className="transperent-card rounded-xl shadow-xl p-4 flex flex-col hover:translate-y-[-2px] transition-transform"
            whileHover={{ scale: 1.01 }}
          >
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
            <p className="text-gray-400 text-sm flex-1">{p.description}</p>
            <span className="mt-3 font-semibold">Visit</span>
          </motion.a>
        ))}
      </div>
    </>
  );
}
