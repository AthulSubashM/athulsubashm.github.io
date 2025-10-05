import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import bg from "./assets/stars_background.jpg";

document.documentElement.style.setProperty("--global-bg", `url(${bg})`);

createRoot(document.getElementById("root")).render(<App />);
