import jsIcon from "../assets/skills/js.webp";
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
    name: "JavaScript (ES6+)",
    icon: jsIcon,
    description:
      "Deep expertise in modern JavaScript (ES6+), asynchronous patterns, DOM manipulation, and full-stack integration.",
  },
  {
    name: "Python",
    icon: pythonIcon,
    description:
      "Proficient in Python for AI/ML pipelines, LLM serving (vLLM), Flask backends, OCR processing, and Pandas data transformations.",
  },
  {
    name: "Node.js & Express",
    icon: nodeIcon,
    description:
      "Engineered high-throughput REST APIs, server-side pagination, stateless microservices, and Chrome extension backends.",
  },
  {
    name: "React.js",
    icon: reactIcon,
    description:
      "Building responsive, high-performance web applications and real-time security dashboards with modern state management.",
  },
  {
    name: "Next.js",
    icon: nextIcon,
    description:
      "Experience with Server-Side Rendering (SSR), API routes, dynamic theming engines, and modern full-stack web platforms.",
  },
  {
    name: "AI / ML & LLMs",
    description:
      "Building and deploying LLM pipelines with vLLM, IndicTrans2, Gemma, PyTorch, CNNs for binary malware detection, and OCR engines.",
  },
  {
    name: "WebSockets & Event Systems",
    description:
      "Designing low-latency (<200ms) real-time streaming architectures, event-driven pipelines, and Celery background task processing.",
  },
  {
    name: "MongoDB",
    icon: mongoIcon,
    description:
      "Expertise in NoSQL schema design, aggregation pipelines, performance indexing, and handling high-volume operational data.",
  },
  {
    name: "MySQL",
    icon: mysqlIcon,
    description:
      "Experience in designing relational schemas, complex queries, transactions, and structured database management.",
  },
  {
    name: "AWS Infrastructure",
    icon: awsIcon,
    description:
      "Deploying and operating production workloads on AWS EC2, configuring compute instances, security groups, and automated runbooks.",
  },
  {
    name: "NGINX Web Server",
    icon: nginxIcon,
    description:
      "Configuring NGINX reverse proxies, SSL/TLS termination, rate limiting, and caching for high-availability production environments.",
  },
  {
    name: "Git & CI/CD",
    icon: gitIcon,
    description:
      "Proficient in Git version control, collaborative workflows, deployment automation, and continuous integration basics.",
  },
  {
    name: "Testing & Benchmarking",
    icon: postmanIcon,
    description:
      "API testing and documentation with Postman, along with end-to-end scalability and P95/P99 latency benchmarking using Locust.",
  },
];

export default skills;
