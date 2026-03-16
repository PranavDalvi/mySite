import { ArrowDown } from "lucide-react";
import heroVideo from "../../assets/blends/sphear-blend.webm";
import Button from "../Button/Button";
import useScrollNav from "../../hooks/useScrollNav";

const Hero = () => {
  useScrollNav(false);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#work";
    }
  };
  return (
    <section className="section-fade mt-16 md:mt-20 flex flex-col-reverse md:flex-row gap-10 md:gap-12 items-center justify-center px-4 md:px-0">
      <div className="flex-1">
        <div className="flex flex-col gap-5 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <span className="inline-flex self-center md:self-start px-3 py-1 rounded-full border border-[rgba(145,189,248,0.35)] bg-[rgba(18,34,56,0.58)] text-[0.72rem] uppercase tracking-[0.16em] text-[#a9d9ff]">
            Software Engineer Portfolio
          </span>
          <h1 className="display-face text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.04]">
            <span className="block">Shaping Ideas</span>
            <span className="block bg-gradient-to-r from-[#e7f4ff] via-[#86d6ff] to-[#8ef3df] bg-clip-text text-transparent">
              Into Production Systems
            </span>
            <span className="block text-[#dcecff]">That Deliver Results</span>
          </h1>
          <p className="text-sm md:text-lg text-[#c8d8ef] max-w-xl">
            Hi, I'm Pranav, a software engineer based in India with a passion
            for building polished products, reliable backends, and interfaces
            that feel effortless to use.
          </p>
        </div>
        <div className="mt-7 flex justify-center md:justify-start">
          <Button onClick={scrollToWork} className="">
            See My Work <ArrowDown />
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <video
          className="hero-video-frame w-full max-w-xs md:max-w-lg lg:max-w-xl rounded-2xl"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
