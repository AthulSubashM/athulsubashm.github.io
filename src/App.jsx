import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import TwinklingStars from "./components/Background/TwinklingStars";
import ShootingStars from "./components/Background/ShootingStars";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

// Lazy-loaded pages
const Contact = lazy(() => import("./pages/Contact"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <Router>
      <Navbar />
      <TwinklingStars />
      <ShootingStars />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
