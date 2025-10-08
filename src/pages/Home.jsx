import { lazy } from "react";

import Hero from "../components/Home/Hero/Hero";
import Techstack from "../components/Home/Techstack";
import About from "../components/Home/About";
// const ProjectSlider = lazy(() => import("../components/Home/ProjectsSlider"));
import ProjectSlider from "../components/Home/ProjectsSlider";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectSlider />
      <Techstack />
    </>
  );
}

export default Home;
