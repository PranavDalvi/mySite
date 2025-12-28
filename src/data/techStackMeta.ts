import type { ComponentType } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiVercel,
  SiNetlify,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiNumpy,
  SiOpencv,
  SiNginx,
  SiNgrok,
  SiCircleci,
  SiNestjs,
  SiPrisma,
  SiGithubactions,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

/**
 * techStackIcons
 *
 * A mapping of tech name (key used in `projects[].techStack`) to an object
 * containing an icon component from `react-icons/si` and a recommended color.
 *
 * Notes:
 * - Keys are case-sensitive. Make sure your `projects` entries match these keys
 *   exactly (or implement a normalization map if you accept variants).
 * - For some libraries that don't have official simple-icons entries, a reasonable
 *   fallback icon (usually the language/runtime icon) is used.
 */

export const techStackIcons: Record<
  string,
  { icon: ComponentType<any>; color: string }
> = {
  // Languages & frameworks
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  Vue: { icon: SiVuedotjs, color: "#41b883" },
  Angular: { icon: SiAngular, color: "#dd0031" },

  // Node / backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#000000" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Fastify: { icon: SiNodedotjs, color: "#0A8AFF" }, // fallback to Node icon

  // Python ecosystem
  Python: { icon: SiPython, color: "#306998" },
  Django: { icon: SiDjango, color: "#092e20" },
  Flask: { icon: SiFlask, color: "#000000" },
  NumPy: { icon: SiNumpy, color: "#013243" },
  OpenCV: { icon: SiOpencv, color: "#5C9BD1" },
  "Tesseract OCR": { icon: SiPython, color: "#3B3B3B" }, // fallback to Python icon
  "python-docx": { icon: SiPython, color: "#306998" },
  "Beautiful Soup 4": { icon: SiPython, color: "#4B8BBE" },

  // Machine learning / data
  "Machine Learning": { icon: SiTensorflow, color: "#FF6F00" },
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  Pandas: { icon: SiPandas, color: "#4B8BBE" },
  "scikit-learn": { icon: SiScikitlearn, color: "#3B3B3B" },

  // Databases & queues
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  BullMQ: { icon: SiRedis, color: "#DC382D" }, // Redis-backed queue; use Redis icon
  "Prisma v7": { icon: SiPrisma, color: "#0EA5A4" },

  // DevOps / infra / hosting
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  AWS: { icon: SiAmazonwebservices, color: "#FF9900" },
  Vercel: { icon: SiVercel, color: "#000000" },
  Netlify: { icon: SiNetlify, color: "#00C7B7" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },

  // Networking / gateways / tunneling
  NGINX: { icon: SiNginx, color: "#009639" },
  NGROK: { icon: SiNgrok, color: "#0A84FF" },

  // CI / CD / DevOps tooling
  "CI/CD": { icon: SiCircleci, color: "#343434" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  DevOps: { icon: SiGithubactions, color: "#2088FF" }, // generic DevOps key

  // Tools / VCS / misc
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },

  // Frontend / styling
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss3, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38B2AC" },
  "Material UI": { icon: SiMui, color: "#0081CB" },

  // Utilities (fallbacks)
  zod: { icon: SiTypescript, color: "#3178c6" }, // no simple-icon; use TS icon as mnemonic
};
