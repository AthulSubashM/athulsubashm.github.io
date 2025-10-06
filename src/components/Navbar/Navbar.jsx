// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo"></h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
