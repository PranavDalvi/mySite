import { Braces, Handshake } from "lucide-react";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import { skills } from "../../data/skills";
import type { Skill } from "../../types/skill";

export const Skillset = () => {
  return (
    <div className="mt-10  min-h-screen p-12">
      <NewSectionTitle icon={Handshake} title="What I can bring to the table" />
      <h1 className="text-5xl font-semibold text-white mb-8 text-center">
        How I can Contribute & My key Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill: Skill) => (
          <div
            key={skill.name}
            className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              {skill.icon ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 rounded"
                />
              ) : (
                <Braces className="text-white" />
              )}
              <span className="text-xl font-semibold text-white">
                {skill.name}
              </span>
            </div>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
