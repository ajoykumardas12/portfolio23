import { ProjectType } from "@/app/types";

const projects: ProjectType[] = [
  {
    name: "QR Code Generator",
    description:
      "Generate customizable QR code for text, url, message, contact, email.",
    technologies: ["React.js", "JavaScript", "CSS"],
    live: "https://the-qrcodegenerator.vercel.app/",
    repo: "https://github.com/ajoykumardas12/qr-code-generator",
    imageSrc: "/images/projects/qr-code-generator.png",
  },
  {
    name: "Blog",
    description:
      "Collaborated with a team as a frontend developer. Developed a responsive web app using Next.js, Tailwind CSS, TypeScript. Implemented features to filter blog posts by category, author. Implemented fuzzy search using fuse.js.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://snakebyte.vercel.app/",
    repo: "https://github.com/Hack-Weekly/lavender-snake-blog",
    imageSrc: "/images/projects/blog.png",
  },
  {
    name: "Online Examination System",
    description:
      "Collaborated as a Front-end developer in group of four. designed and developed front-end for the system. Implemented multiple features of online examination platform, restrictions during exams, contributed in features like facial recognition during login, automated marks evaluation.",
    technologies: ["Laravel", "JavaScript", "CSS", "Python"],
    live: "",
    repo: "",
    imageSrc: "/images/projects/oes-screenshot.png",
  },
  {
    name: "Spyro",
    description:
      "Fitness app landing page developed from figma community design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://spyrofit.vercel.app/",
    repo: "https://github.com/ajoykumardas12/spyro",
    imageSrc: "/images/projects/spyrofit.png",
  },
  {
    name: "WeatherLab",
    description:
      "Implemented Current weather and five day forecast for different locations using OpenWeatherMap API. Implemented city name suggestions when searching using Teleport API, used browser local storage to save home-city.",
    technologies: ["JavaScript", "OpenWeatherMap API", "CSS"],
    live: "https://weatherlab.netlify.app/",
    repo: "https://github.com/ajoykumardas12/weather-app",
    imageSrc: "/images/projects/weatherlab-screenshot.png",
  },
];

export default projects;
