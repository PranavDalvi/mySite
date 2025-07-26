interface ValueCardProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-2 border border-[#1c1c21] transperent-card rounded-lg">
      {icon}
      <span className="font-semibold text-xl">{title}</span>
      <span className="text-md text-gray-300">{description}</span>
    </div>
  );
};

export default ValueCard;
