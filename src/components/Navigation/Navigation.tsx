import { Link } from "react-router";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 bg-[#1D1C2291] p-4 mt-4 rounded-xl">
      <span>Name Surname</span>
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
      <Link className="p-2 bg-[#EBF3FA] text-black rounded-lg" to={"/#contact"}>
        Contact Me
      </Link>
    </div>
  );
};

export default Navigation;
