import { lazy } from "react";
const ProjectSlider = lazy(() => import("../components/Home/ProjectsSlider"));

import Hero from "../components/Home/Hero/Hero";
import Techstack from "../components/Home/Techstack";
import About from "../components/Home/About";
// import ProjectSlider from "../components/Home/ProjectsSlider";
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
