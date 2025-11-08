import jsIcon from "../assets/skills/js.webp";
import reactIcon from "../assets/skills/react.webp";

import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: jsIcon,
    description:
      "I have more than 2 years of experience in JavaScript making the fundamentals of the web development framework strong.",
  },
  {
    name: "React JS",
    icon: reactIcon,
    description:
      "I have been creating various interesting projects using React library and make sure all of my projects are user friendly.",
  },
  {
    name: "Web Fundamentals",
    description:
      "Solid understanding of HTML, CSS, accessibility, and web performance best practices.",
  },
];

export default skills;
