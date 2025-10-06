import React from "react";

export default function Description({ innerRef }) {
  return (
    <section ref={innerRef} style={{ minHeight: "100vh", padding: "50px" }}>
      <h2>Technologies I Use</h2>
      <p>Here’s what each icon represents...</p>
    </section>
  );
}
