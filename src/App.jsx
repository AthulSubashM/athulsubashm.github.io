import { useState } from "react";
import "./index.css";

import TwinklingStars from "./components/TwinklingStars";
import ShootingStars from "./components/ShootingStars";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <TwinklingStars />
      <ShootingStars />
    </>
  );
}

export default App;
