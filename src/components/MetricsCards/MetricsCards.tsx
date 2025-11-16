import Cards from "./Cards";

const MetricsCards = () => {
  return (
    <div className="mt-20 w-full px-4 md:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Cards number={1.5} text="Years of Experience" addPlus={true} />
        <Cards number={3} text="Current Projects" addPlus={true} />
        <Cards number={5} text="Completed Projects" addPlus={true} />
        <Cards number={1} text="Research Papers published" addPlus={false} />
      </div>
    </div>
  );
};

export default MetricsCards;
