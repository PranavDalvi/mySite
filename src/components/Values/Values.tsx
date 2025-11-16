import { Medal, MessageCircleMore, Timer } from "lucide-react";
import ValueCard from "./ValueCard";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";

const Values = () => {
  const valuesData = [
    {
      icon: <Medal className="w-8 h-8 text-amber-300" />,
      title: "Quality Focus",
      description:
        "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      icon: <MessageCircleMore className="w-8 h-8 text-green-300" />,
      title: "Reliable Communication",
      description:
        "Keeping you updated at every step to ensure transparency and clarity..",
    },
    {
      icon: <Timer className="w-8 h-8 text-purple-300" />,
      title: "On-Time Delivery",
      description:
        "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];

  return (
    <>
      <NewSectionTitle
        className="mt-10 mb-6"
        icon={Medal}
        title="My Core Values"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-0">
        {valuesData.map((value, index) => (
          <div key={index} className="">
            <ValueCard
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Values;
