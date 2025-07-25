import Cards from "./Cards";

const MetricsCards = () => {
  return (
    <div className="mt-20 flex flex-row w-full justify-between gap-4">
      <Cards number={1.5} text="Years of Experience" addPlus={true} />
      <Cards number={3} text="Current Projects" addPlus={true} />
      <Cards number={5} text="Completed Projects" addPlus={true} />
      <Cards number={1} text="Research Papers published" addPlus={false} />
    </div>
  );
};

export default MetricsCards;
