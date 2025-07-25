interface CardProps {
  number: number;
  text: string;
  addPlus: boolean;
}

const Cards = ({ number, text, addPlus }: CardProps) => {
  return (
    <div className="w-full p-5 flex flex-col gap-2 border border-[#1c1c21] transperent-card rounded-lg">
      <span className="text-4xl font-bold text-shadow">
        {number}
        {addPlus ? "+" : ""}
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Cards;
