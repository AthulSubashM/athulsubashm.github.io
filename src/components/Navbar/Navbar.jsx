import css from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={css.navbar}>
      <h1 className={css.logo}></h1>
      <ul className={css["nav-links"]}>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Connect with Me</li>
      </ul>
    </nav>
  );
}
