import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    company: "Hostinger",
    logo: "/logos/hostinger.svg",
    accent: ["#9b5cf5", "#5a85f5"],
    role: "Frontend Developer",
    dateRange: "January 2023 – Present",
    responsibilities: [
      "Developed and maintained user‑facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    company: "Appwrite",
    logo: "/logos/appwrite.svg",
    accent: ["#e44c65", "#b1202b"],
    role: "Full Stack Developer",
    dateRange: "June 2020 – December 2023",
    responsibilities: [
      "Led the development of Docker’s web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open‑source projects used within the Docker ecosystem.",
    ],
  },
  {
    company: "Docker",
    logo: "/logos/docker.svg",
    accent: ["#00a8e8", "#055a8c"],
    role: "React Native Developer",
    dateRange: "March 2019 – May 2020",
    responsibilities: [
      "Built cross‑platform mobile apps using React Native, integrating with Appwrite’s backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with product team to implement features based on feedback.",
    ],
  },
];
