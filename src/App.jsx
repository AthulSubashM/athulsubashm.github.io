import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import TwinklingStars from "./components/Background/TwinklingStars";
import ShootingStars from "./components/Background/ShootingStars";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

// Lazy-loaded pages
const Connect = lazy(() => import("./pages/Connect"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <TwinklingStars /> <ShootingStars />
        <main className="app-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/connect" element={<Connect />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
