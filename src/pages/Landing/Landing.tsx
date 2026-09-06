import Experience from "../../components/CompanyScroller/Experience";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Footer } from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import MetricsCards from "../../components/MetricsCards/MetricsCards";
import Navigation from "../../components/Navigation/Navigation";
import Projects from "../../components/Projects/Projects";
import { Skillset } from "../../components/Skillset/Skillset";
import Values from "../../components/Values/Values";
import { NewSectionTitle } from "../../components/NewSectionTitle/NewSectionTitle";
import { Code2 } from "lucide-react";

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
          className="my-14 md:my-20 flex flex-col items-center justify-center scroll-mt-24 px-4"
        >
          <NewSectionTitle
            className="mb-4"
            icon={Code2}
            title="Continuous Learning"
          />
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Algorithmic Problem Solving
            </h2>
            <p className="text-sm text-slate-400 max-w-md mx-auto mt-2">
              Daily practice across advanced data structures, graph theory, and dynamic programming.
            </p>
          </div>
          <a
            href="https://leetcode.com/u/pranavd128/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LeetCode profile in a new tab"
            className="transperent-card rounded-2xl p-3 border border-white/10 hover:border-sky-500/30 shadow-xl hover:translate-y-[-2px] transition-all duration-200 group"
          >
            <img
              src="https://leetcard.jacoblin.cool/pranavd128?ext=activity"
              alt="LeetCode Stats"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="rounded-xl max-w-full"
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
