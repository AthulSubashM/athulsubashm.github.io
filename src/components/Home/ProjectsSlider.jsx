import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaGithub } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../Projects/projectslist";
import css from "./home.module.css";

export default function ProjectSlider() {
  // Select Projects to show by ID
  const selectedProjects = projects.filter((project) =>
    [1, 2, 3, 4, 5].includes(project.id)
  );

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 3000, // time between slides
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {selectedProjects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className={css["slider-container"]}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                aspectRatio: "16 / 9",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <div className={css["slider-text"]}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css["github-link"]}
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
