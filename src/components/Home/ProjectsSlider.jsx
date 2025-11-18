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
    <div className={css["home-slider"]}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {selectedProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className={css["slider-container"]}>
              <img
                src={project.image.src || project.image}
                alt={project.title}
                style={{
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <div className={css["slider-text"]}>
                <h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css["h3-link"]}
                  >
                    {project.title}
                  </a>
                </h3>
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
    </div>
  );
}
