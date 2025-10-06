// src/components/Navbar.jsx
import React from "react";
import "../index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
