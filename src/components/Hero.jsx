import React from "react";
import IconSphere from "./IconSphere";

export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconSphere />
    </section>
  );
}
