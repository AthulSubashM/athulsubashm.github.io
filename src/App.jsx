import { useState } from "react";
import "./index.css";

import TwinklingStars from "./components/TwinklingStars";
import ShootingStars from "./components/ShootingStars";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
