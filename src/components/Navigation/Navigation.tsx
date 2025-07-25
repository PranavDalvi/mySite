import { Link } from "react-router";
import Button from "../Button/Button";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 transperent-card p-4 mt-4 rounded-xl">
      <span className="text-shadow text-2xl font-semibold">Pranav Dalvi</span>
      <ul className="flex flex-row gap-4 items-center">
        <li className="hover:bg-[#EBF3FA] transition-colors hover:text-black p-2 rounded-lg">
          <Link to={"/#work"}>Work</Link>
        </li>
        <li className="hover:bg-[#EBF3FA] transition-colors hover:text-black p-2 rounded-lg">
          <Link to={"/#skills"}>Skills</Link>
        </li>
        <li className="hover:bg-[#EBF3FA] transition-colors hover:text-black p-2 rounded-lg">
          <Link to={"/#experience"}>Experience</Link>
        </li>
        <li className="hover:bg-[#EBF3FA] transition-colors hover:text-black p-2 rounded-lg">
          <Link to={"/#testimonials"}>Testimonials</Link>
        </li>
      </ul>
      <Button>Contact Me</Button>
    </div>
  );
};

export default Navigation;
