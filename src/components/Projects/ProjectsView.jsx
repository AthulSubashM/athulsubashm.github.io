import css from "./projects.module.css";
import { projects } from "./projectslist.js";

export default function ProjectsView() {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className={css.projectCard}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className={css.projectImage}
            />
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
