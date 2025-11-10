import portImg from "../../assets/projects/portfolio.png";
import hyprImg from "../../assets/projects/hyprland.png";
import ecoImg from "../../assets/projects/ecolens.png";
import shooterImg from "../../assets/projects/spaceshooter.png";
import blenderImg from "../../assets/projects/blender.png";

// List of Projects
export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "My personal portfolio built with React.js",
    image: portImg,
    github: "https://github.com/AthulSubashM/athulsubashm.github.io",
  },
  {
    id: 2,
    title: "Hyprland Dotfiles",
    description:
      "My personal Hyprland configuration for Arch Linux with waybar and fuzzel dmenus.",
    image: hyprImg,
    github: "https://github.com/AthulSubashM/hyprland-dotfiles",
  },
  {
    id: 3,
    title: "Eco Lens",
    description:
      "React App that simplyfies waste disposal with AI-powered image classification. 2024 TrentU Hackathon Project.",
    image: ecoImg,
    github: "https://github.com/AthulSubashM/EcoLens",
    demo: "https://athulsubashm.github.io/EcoLens/",
  },
  {
    id: 4,
    title: "Space Shooter 3D",
    description:
      "A work-in-progress 3D space shooter game built in Unity, featuring space flight physics, asteroid hazards, and combat mechanics.",
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
  // {
  //   id: 6,
  //   title: "Project 6",
  //   description: "Another React project",
  //   image: "/images/project2.png",
  //   github: "https://github.com/you/project2",
  // },
];
