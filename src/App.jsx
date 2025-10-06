import { useState } from "react";
import "./index.css";

import TwinklingStars from "./components/TwinklingStars";
import ShootingStars from "./components/ShootingStars";

function App() {
  return (
    <>
      <TwinklingStars />
      <ShootingStars />
    </>
  );
}

export default App;
