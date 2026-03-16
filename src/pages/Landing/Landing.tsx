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
        <section
          id="leetcode"
          className="my-12 flex justify-center scroll-mt-24"
        >
          <a
            href="https://leetcode.com/u/pranavd128/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LeetCode profile in a new tab"
            className="transperent-card rounded-2xl p-2 border border-[rgba(145,182,232,0.32)] shadow-[0_14px_30px_rgba(4,9,18,0.46)]"
          >
            <img
              src="https://leetcard.jacoblin.cool/pranavd128?ext=activity"
              alt="LeetCode Stats"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="rounded-xl"
            />
          </a>
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
