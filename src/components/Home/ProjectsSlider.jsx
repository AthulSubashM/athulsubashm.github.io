import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Project 1",
    description: "My personal portfolio built with React and Three.js",
  },
  {
    title: "Project 2",
    description: "My personal portfolio built with React and Three.js",
  },
  {
    title: "Project 3",
    description: "My personal portfolio built with React and Three.js",
  },
  {
    title: "Project 4",
    description: "My personal portfolio built with React and Three.js",
  },
  {
    title: "Project 5",
    description: "My personal portfolio built with React and Three.js",
  },
  {
    title: "Project 6",
    description: "My personal portfolio built with React and Three.js",
  },
];

export default function ProjectSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={3}
      className="my-8 w-full max-w-3xl"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-xl shadow-lg p-4 bg-white dark:bg-gray-900">
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            /> */}
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
