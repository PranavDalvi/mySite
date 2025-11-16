import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full mt-20 py-6 flex flex-col gap-y-4 md:flex-row  items-center justify-around">
      <div>
        <p className="text-gray-400">Made with ❤️ by Pranav Dalvi</p>
      </div>
      <div className="flex flex-row gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pranav-dalvi-03947a207"
        >
          <Linkedin />
        </a>
        <a target="_blank" href="https://github.com/PranavDalvi">
          <Github />
        </a>
        <a href="mailto:pranav.dalvi932@gmail.com">
          <Mail />
        </a>
      </div>
      <div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  );
};
