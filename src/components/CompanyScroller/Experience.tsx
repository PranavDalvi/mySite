import { TimelineItem } from "./TimelineItem";
import { experiences } from "../../data/experiences";

const Experience = () => {
  return (
    <div className="mt-10  min-h-screen p-12">
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Professional Work Experience
      </h1>

      {/* stack each TimelineItem with vertical spacing */}
      <div className="space-y-12">
        {experiences.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isLastItem={index === experiences.length - 1} // Check if it's the last item
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
