import Experience from "../../components/CompanyScroller/Experience";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Footer } from "../../components/Footer/Footer";
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
      <section id="work" />
      <Projects />
      <Values />
      <section id="experience" />
      <Experience />
      <section id="skills" />
      <Skillset />
      <section id="contact" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Landing;
