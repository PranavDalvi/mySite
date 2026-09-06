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
      <main className="section-fade pb-14">
        <Hero />
        <MetricsCards />
        <section id="work" aria-label="Work" className="scroll-mt-24">
          <Projects />
        </section>
        <Values />
        <section
          id="experience"
          aria-label="Experience"
          className="scroll-mt-24"
        >
          <Experience />
        </section>
        <section id="skills" aria-label="Skills" className="scroll-mt-24">
          <Skillset />
        </section>
        <section id="contact" aria-label="Contact" className="scroll-mt-24">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
