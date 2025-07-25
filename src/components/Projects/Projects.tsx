import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Slower rotation (5 sec)
    return () => clearInterval(interval);
  }, []);

  const getNextIndices = () => {
    const next1 = (activeIndex + 1) % projects.length;
    const next2 = (activeIndex + 2) % projects.length;
    return [next1, next2];
  };

  const [next1, next2] = getNextIndices();

  return (
    <div className="grid grid-cols-3 gap-6 p-6 items-start">
      {/* Main Large Project (Left Side) */}
      <div className="col-span-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[activeIndex].title}
            className="h-full p-6 transperent-card shadow-xl rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="rounded-xl mb-4 w-full h-96 object-fit"
            />
            <h2 className="text-2xl font-bold mb-2">
              {projects[activeIndex].title}
            </h2>
            <div className="flex flex-row justify-between items-center">
              <p className="text-gray-400 text-base">
                {projects[activeIndex].description}
              </p>
              <a className="font-semibold" href={projects[activeIndex].url}>
                Visit
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Small Projects (Right Side) */}
      <div className="flex flex-col gap-6">
        {[next1, next2].map((index) => (
          <motion.div
            key={projects[index].title}
            className="transperent-card rounded-xl shadow p-3 opacity-70 transform scale-95 hover:opacity-100 hover:scale-100 transition-all"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={projects[index].image}
              alt={projects[index].title}
              className="rounded-xl mb-2 w-full h-40 object-fit"
            />
            <h3 className="text-lg font-semibold">{projects[index].title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
