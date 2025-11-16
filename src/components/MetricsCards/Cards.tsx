interface CardProps {
  number: number;
  text: string;
  addPlus: boolean;
}

const Cards = ({ number, text, addPlus }: CardProps) => {
  return (
    <div className="w-full p-5 flex flex-col gap-2 border border-[#1c1c21] transperent-card rounded-lg items-center text-center md:items-start md:text-left">
      <span className="text-3xl md:text-4xl font-bold text-shadow leading-tight">
        {number}
        {addPlus ? "+" : ""}
      </span>
      <span className="text-sm md:text-base text-gray-200">{text}</span>
    </div>
  );
};

export default Cards;
