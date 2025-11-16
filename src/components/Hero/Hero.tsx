import { ArrowDown } from "lucide-react";
import heroImage from "../../assets/image-188.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col-reverse md:flex-row gap-10 items-center justify-center px-4 md:px-0">
      <div className="flex-1">
        <div className="flex flex-col gap-4 max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-semibold leading-tight">
            <span className="block">Shaping Ideas</span>
            <span className="block">into Real Projects</span>
            <span className="block">that Deliver Results</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            Hi, I'm Pranav, a developer based in India with a passion for code.
          </p>
        </div>
        <div className="mt-5 flex justify-center md:justify-start">
          <Button className="">
            See My Work <ArrowDown />
          </Button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          className="w-full max-w-xs md:max-w-md"
          src={heroImage}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
