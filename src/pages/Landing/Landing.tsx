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
      <section id="leetcode" className="my-12 flex justify-center">
        <a href="https://leetcode.com/u/pranavd128/">
          <img
            src="https://leetcard.jacoblin.cool/pranavd128?ext=activity"
            alt="LeetCode Stats"
          />
        </a>
      </section>
      <section id="contact" />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Landing;
