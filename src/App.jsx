import { useState } from "react";
import "./CSS/index.css";

import TwinklingStars from "./components/Background/TwinklingStars";
import ShootingStars from "./components/Background/ShootingStars";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TwinklingStars />
      <ShootingStars />
    </>
  );
}

export default App;
