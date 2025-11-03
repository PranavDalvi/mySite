import { TimelineItem } from "./TimelineItem";
import { experiences } from "../../data/experiences";

const Experience = () => {
  return (
    <div className="mt-10  min-h-screen p-12">
      <h1 className="text-4xl font-extrabold text-white mb-8">
        Professional Work Experience
      </h1>

      {/* stack each TimelineItem with vertical spacing */}
      <div>
        {experiences.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            isFirstItem={index === 0}
            isLastItem={index === experiences.length - 1} // Check if it's the last item /he
            prevAccentEnd={
              index > 0 ? experiences[index - 1].accent[1] : undefined
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
