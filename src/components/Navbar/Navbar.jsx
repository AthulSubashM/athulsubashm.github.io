import css from "./navbar.module.css";
import Logo from "../../components/Logo/rocket";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <Logo />
      <ul className={css["nav-links"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/connect">Connect with Me</Link>
        </li>
      </ul>
    </nav>
  );
}
