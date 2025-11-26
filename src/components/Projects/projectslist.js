import portImg from "../../assets/projects/portfolio.webp";
import hyprImg from "../../assets/projects/hyprland.webp";
import ecoImg from "../../assets/projects/ecolens.webp";
import shooterImg from "../../assets/projects/spaceshooter.webp";
import blenderImg from "../../assets/projects/blender.webp";
import cImg from "../../assets/projects/CImg.webp";
import csharpImg from "../../assets/projects/csharpImg.webp";

// List of Projects
export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "My portfolio built with React.js, vite and three.js",
    image: portImg,
    github: "https://github.com/AthulSubashM/athulsubashm.github.io",
  },
  {
    id: 2,
    title: "Hyprland Dotfiles",
    description:
      "My fully functional Hyprland configuration for Arch Linux with custom scripts and dmenus",
    image: hyprImg,
    github: "https://github.com/AthulSubashM/hyprland-dotfiles",
  },
  {
    id: 3,
    title: "Eco Lens",
    description:
      "TrentU Hackathon Project that simplyfies waste disposal with AI-powered image classification",
    image: ecoImg,
    github: "https://github.com/AthulSubashM/EcoLens",
    demo: "https://athulsubashm.github.io/EcoLens/",
  },
  {
    id: 4,
    title: "Space Shooter 3D",
    description:
      "(WIP) 3D space shooter game built in Unity, featuring space flight physics, asteroid hazards, and combat mechanics.",
    image: shooterImg,
    github: "https://github.com/AthulSubashM/Space-Shooter",
  },
  {
    id: 5,
    title: "Blender 3D Models",
    description: "Some of my 3D modelling works with Blender",
    image: blenderImg,
    github: "https://github.com/AthulSubashM/Blender-Portfolio",
  },
  {
    id: 6,
    title: "C Projects",
    description:
      "Number generators for random dice, normal and poisson distributions & scheduling simulators for FIFO, SJF, STCF and RR",
    image: cImg,
    github: "https://github.com/AthulSubashM/C-Projects",
  },
  {
    id: 7,
    title: "C# Projects",
    description:
      "Implementations of a Subway system, Perfect Maze, Point Quad Tree and KD Tree",
    image: csharpImg,
    github: "https://github.com/AthulSubashM/C-Sharp-Projects",
  },
];
