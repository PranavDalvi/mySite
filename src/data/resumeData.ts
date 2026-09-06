import { experiences } from "./experiences";
import { projects } from "./projects";

export interface Education {
  degree: string;
  institution: string;
  score: string;
  dateRange: string;
}

export interface ResumeProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  portfolio: string;
  portfolioUrl: string;
  education: Education[];
  skillsCategories: {
    category: string;
    items: string[];
  }[];
}

export const resumeProfile: ResumeProfile = {
  name: "Pranav Dalvi",
  title: "Software Engineer",
  location: "Mumbai, India",
  email: "pranav.dalvi932@gmail.com",
  linkedin: "linkedin.com/in/pranav-dalvi-03947a207",
  linkedinUrl: "https://www.linkedin.com/in/pranav-dalvi-03947a207/",
  github: "github.com/PranavDalvi",
  githubUrl: "https://github.com/PranavDalvi",
  portfolio: "pranavdalvi.github.io/mySite",
  portfolioUrl: "https://pranavdalvi.github.io/mySite/",
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Mumbai",
      score: "CGPA: 9.73 / 10",
      dateRange: "2023 – 2025",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Mumbai",
      score: "CGPA: 9.26 / 10",
      dateRange: "2020 – 2023",
    },
  ],
  skillsCategories: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "Python"],
    },
    {
      category: "Back-end",
      items: [
        "Node.js",
        "Express.js",
        "Flask",
        "REST API design",
        "WebSockets",
        "Event-driven architecture",
        "Celery",
      ],
    },
    {
      category: "Front-end",
      items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "AI / ML",
      items: [
        "vLLM",
        "PyTorch",
        "CNN",
        "TensorFlow / Keras",
        "Pandas",
        "Feature Engineering",
        "OCR",
        "IndicTrans2",
        "Gemma",
      ],
    },
    {
      category: "Infrastructure & Tools",
      items: [
        "AWS EC2",
        "NGINX",
        "Linux",
        "Git & GitHub",
        "Postman",
        "Locust",
        "CI/CD basics",
      ],
    },
  ],
};

export { experiences, projects };
