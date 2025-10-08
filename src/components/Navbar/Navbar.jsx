import css from "./navbar.module.css";
import logo from "../../assets/vite.svg";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <img src={logo} alt="Logo" className={css.logo} />
      <ul className={css["nav-links"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>About</li>
        <li>Connect with Me</li>
      </ul>
    </nav>
  );
}
