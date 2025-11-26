export const techStack = [
  {
    category: "Web Development",
    icons: [
      { name: "React", src: "https://cdn.simpleicons.org/react/ffffff" },
      { name: "Astro", src: "https://cdn.simpleicons.org/astro/ffffff" },
      { name: "Vite", src: "https://cdn.simpleicons.org/vite/ffffff" },
      { name: "Node.js", src: "https://cdn.simpleicons.org/node.js/ffffff" },
      {
        name: "JavaScript",
        src: "https://cdn.simpleicons.org/javascript/ffffff",
      },
      { name: "HTML5", src: "https://cdn.simpleicons.org/html5/ffffff" },
      { name: "CSS3", src: "https://cdn.simpleicons.org/css/ffffff" },
      { name: "MySQL", src: "/icons/mysql.svg" },
    ],
  },
  {
    category: "System Development",
    icons: [
      { name: "C", src: "https://cdn.simpleicons.org/c/ffffff" },
      { name: "C#", src: "/icons/csharp.svg" },
      { name: "Python", src: "https://cdn.simpleicons.org/python/ffffff" },
      { name: "Bash", src: "https://cdn.simpleicons.org/gnubash/ffffff" },
      { name: "Linux", src: "https://cdn.simpleicons.org/linux/ffffff" },
    ],
  },
  {
    category: "Developer Tools",
    icons: [
      { name: "Git", src: "https://cdn.simpleicons.org/git/ffffff" },
      { name: "GitHub", src: "https://cdn.simpleicons.org/github/ffffff" },
      { name: "VS Code", src: "/icons/vscode.svg" },
      { name: "Neovim", src: "https://cdn.simpleicons.org/neovim/ffffff" },
      { name: "Docker", src: "https://cdn.simpleicons.org/docker/ffffff" },
      { name: "Unity", src: "https://cdn.simpleicons.org/unity/ffffff" },
      { name: "Blender", src: "https://cdn.simpleicons.org/blender/ffffff" },
      {
        name: "Hugging Face",
        src: "https://cdn.simpleicons.org/huggingface/ffffff",
      },
    ],
  },
];

export const icons = techStack.flatMap((category) => category.icons);
