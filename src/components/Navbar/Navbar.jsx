import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}></h1>
      <ul className={styles["nav-links"]}>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
