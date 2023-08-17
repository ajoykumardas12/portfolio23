import { ProjectType } from "@/app/types";

const projects: ProjectType[] = [
  {
    name: "Get-Palette (WIP)",
    description:
      "Generate beautiful color palettes from images, export color palettes in CSS or get a shareable link. Explore the community palettes, like and save your favorites.",
    technologies: ["Next.js", "Zustand", "Shadcn UI"],
    live: "https://getpalette.vercel.app/",
    repo: "https://github.com/ajoykumardas12/get-palette",
    imageSrc: "/images/projects/get-palette-screenshot.png",
  },
  {
    name: "QR Code Generator",
    description:
      "Generate QR codes that can include text, URLs, messages, contacts, emails and more. QR code outputs are easily customizable.",
    technologies: ["React.js", "JavaScript", "CSS"],
    live: "https://the-qrcodegenerator.vercel.app/",
    repo: "https://github.com/ajoykumardas12/qr-code-generator",
    imageSrc: "/images/projects/qr-code-generator.png",
  },
  {
    name: "Blog",
    description:
      "Collaborated as a front-end developer within a team to build a responsive blog. Incorporated filter options for blog posts and implemented fuzzy search using fuse.js.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://snakebyte.vercel.app/",
    repo: "https://github.com/Hack-Weekly/lavender-snake-blog",
    imageSrc: "/images/projects/blog.png",
  },
  {
    name: "Online Examination System",
    description:
      "Lead a team as a full-stack developer. Designed and developed the front-end of the platform. Played a key role in implementing various features including exam restrictions, facial recognition during login, automated marks evaluation.",
    technologies: ["Laravel", "JavaScript", "CSS", "Python"],
    live: "",
    repo: "",
    imageSrc: "/images/projects/oes-screenshot.png",
  },
  {
    name: "Spyro",
    description:
      "Developed a captivating fitness app landing page based on a design from the Figma community.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://spyrofit.vercel.app/",
    repo: "https://github.com/ajoykumardas12/spyro",
    imageSrc: "/images/projects/spyrofit.png",
  },
  {
    name: "WeatherLab",
    description:
      "Weather web app providing current weather and five day forecast for different locations using OpenWeatherMap API. Implemented city name suggestions using Teleport API, and utilized browser local storage to save user's home city, unit preferences",
    technologies: ["JavaScript", "OpenWeatherMap API", "CSS"],
    live: "https://weatherlab.netlify.app/",
    repo: "https://github.com/ajoykumardas12/weather-app",
    imageSrc: "/images/projects/weatherlab-screenshot.png",
  },
];

export default projects;
