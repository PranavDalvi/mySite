import Cards from "./Cards";

const MetricsCards = () => {
  return (
    <div className="items-center mt-14 md:mt-18 w-full px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <Cards number={2} text="Years of Experience" addPlus={true} />
        <Cards number={7} text="Ongoing + Completed Projects" addPlus={false} />
        <Cards number={1} text="Research Paper published" addPlus={false} />
      </div>
    </div>
  );
};

export default MetricsCards;
