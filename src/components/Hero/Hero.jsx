import React from "react";
import IconSphere from "./IconSphere";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <div
      className="hero"
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconSphere />
      <HeroText />
    </div>
  );
}
