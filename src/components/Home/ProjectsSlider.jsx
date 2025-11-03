import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../Projects/projectslist";

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
        delay: 2500, // time between slides
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {selectedProjects.map((project, index) => (
        <SwiperSlide key={index}>
          <div>
            <img
              src={project.image}
              alt={project.title}
              style={{
                aspectRatio: "16 / 9",
                objectFit: "cover",
                borderRadius: "10px",
                width: "100%",
              }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
