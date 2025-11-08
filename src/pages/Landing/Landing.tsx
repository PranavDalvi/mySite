import Experience from "../../components/CompanyScroller/Experience";
import Hero from "../../components/Hero/Hero";
import MetricsCards from "../../components/MetricsCards/MetricsCards";
import Navigation from "../../components/Navigation/Navigation";
import Projects from "../../components/Projects/Projects";
import { Skillset } from "../../components/Skillset/Skillset";
import Values from "../../components/Values/Values";

const Landing = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <MetricsCards />
      <Projects />
      <Values />
      <Experience />
      <Skillset />
    </>
  );
};

export default Landing;
