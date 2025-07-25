import { MoveDown } from "lucide-react";
import heroImage from "../../assets/image-188.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="mt-20 flex flex-row gap-10 items-center justify-center">
      <div>
        <div className="flex flex-col gap-4">
          <span className="text-7xl font-semibold">
            <div>Shaping Ideas</div>
            <div>into Real Projects</div>
            <div>that Deliver Results</div>
          </span>
          <span>
            Hi, I'm Pranav, a developer based in India with a passion for code.
          </span>
        </div>
        <Button className="mt-5">
          See My Work <MoveDown />
        </Button>
      </div>
      <div>
        <img className="w-[100%]" src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
