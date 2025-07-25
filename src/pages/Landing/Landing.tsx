import Hero from "../../components/Hero/Hero";
import MetricsCards from "../../components/MetricsCards/MetricsCards";
import Navigation from "../../components/Navigation/Navigation";
import Projects from "../../components/Projects/Projects";

const Landing = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <MetricsCards />
      <Projects />
    </>
  );
};

export default Landing;
