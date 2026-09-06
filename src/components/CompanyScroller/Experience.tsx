import { TimelineItem } from "./TimelineItem";
import { experiences } from "../../data/experiences";
import { BriefcaseBusiness } from "lucide-react";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";

const Experience = () => {
  return (
    <div className="mt-14 md:mt-24 px-4 md:px-0">
      <NewSectionTitle
        className="mb-4"
        icon={BriefcaseBusiness}
        title="Experience & Track Record"
      />
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Professional Work Experience
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-2">
          Engineering roles at premier research institutes and fast-scaling product startups.
        </p>
      </div>

      {/* stack each TimelineItem with vertical spacing */}
      <div className="max-w-4xl mx-auto space-y-5">
        {experiences.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
