import reactIcon from "../assets/skills/react.webp";
import nextIcon from "../assets/skills/nextjs.webp";
import figmaIcon from "../assets/skills/Figma.webp";
import nodeIcon from "../assets/skills/nodejs.webp";
import oauthIcon from "../assets/skills/oauth.svg";
import pythonIcon from "../assets/skills/python.svg";
import mongoIcon from "../assets/skills/mongodb-icon.svg";
import mysqlIcon from "../assets/skills/mysql.svg";
import awsIcon from "../assets/skills/amazon-web-services.svg";
import nginxIcon from "../assets/skills/nginx.svg";
import gitIcon from "../assets/skills/git.svg";
import postmanIcon from "../assets/skills/postman.svg";

import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    name: "Web Fundamentals",
    description:
      "Solid understanding of HTML, CSS, JavaScript accessibility, and web performance best practices.",
  },
  {
    name: "React JS",
    icon: reactIcon,
    description:
      "I have been creating various interesting projects using React library and make sure all of my projects are user friendly.",
  },
  {
    name: "Next JS",
    icon: nextIcon,
    description:
      "Experience building server-side rendered applications and static sites using Next.js framework.",
  },
  {
    name: "Figma",
    icon: figmaIcon,
    description:
      "Proficient in designing user interfaces and experiences using Figma.",
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    description:
      "Experience in building backend services and APIs using Node.js runtime environment.",
  },
  {
    name: "OAuth2.0",
    icon: oauthIcon,
    description:
      "Familiarity with implementing OAuth2.0 authentication and authorization protocols in web applications.",
  },
  {
    name: "Python 3",
    icon: pythonIcon,
    description:
      "Experience in writing scripts and building applications using Python programming language.",
  },
  {
    name: "MongoDB",
    icon: mongoIcon,
    description:
      "Experience in designing and managing NoSQL databases using MongoDB.",
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
    description:
      "Experience in designing and managing relational databases using MySQL.",
  },
  {
    name: "AWS Services",
    icon: awsIcon,
    description:
      "Experience in utilizing various AWS services for cloud computing, storage, and deployment such as EC2, S3, and Route 53.",
  },
  {
    name: "NGINX",
    icon: nginxIcon,
    description:
      "Experience in configuring and managing NGINX web server for hosting and load balancing web applications.",
  },
  {
    name: "Git & GitHub",
    icon: gitIcon,
    description:
      "Proficient in version control using Git and collaborating on projects using GitHub.",
  },
  {
    name: "Postman",
    icon: postmanIcon,
    description:
      "Experience in testing and documenting APIs using Postman tool.",
  },
];

export default skills;
