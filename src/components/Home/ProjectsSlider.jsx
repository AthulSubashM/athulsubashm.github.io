import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../Projects/projectslist";

export default function ProjectSlider() {
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
      className="my-8 w-full max-w-3xl"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-xl shadow-lg p-4 bg-white dark:bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
