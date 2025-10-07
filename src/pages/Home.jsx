import Hero from "../components/Home/Hero/Hero";
import Techstack from "../components/Home/Techstack";
import About from "../components/Home/About";
import Projects from "../components/Home/ProjectsView";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Techstack />
    </>
  );
}

export default Home;
