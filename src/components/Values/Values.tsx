import { Medal, MessageCircleMore, Timer } from "lucide-react";
import ValueCard from "./ValueCard";

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
    <div className="mt-10 flex flex-row gap-5">
      {valuesData.map((value, index) => (
        <ValueCard
          key={index}
          icon={value.icon}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
};

export default Values;
