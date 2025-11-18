import { lazy } from "react";
const ProjectSlider = lazy(() => import("../components/Home/ProjectsSlider"));
const Techstack = lazy(() => import("../components/Home/Techstack"));

import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About";
import css from "../components/Home/home.module.css";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectSlider />
      <div className={css["home-stack"]}>
        <Techstack />
      </div>
    </>
  );
}

export default Home;
