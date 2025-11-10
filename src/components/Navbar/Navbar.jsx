import { useState, useEffect, useRef } from "react";
import css from "./navbar.module.css";
import Logo from "../../assets/Logo/rocket";
import Menu from "../../assets/Menu/menu";
import Links from "./Links.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navbarRef = useRef(null);
  const linksRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (!navbarRef.current || !linksRef.current) return;
      const navbarWidth = navbarRef.current.offsetWidth;
      const linksWidth = linksRef.current.scrollWidth;
      setIsOverflowing(linksWidth > navbarWidth - 100);
    });

    observer.observe(navbarRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={css.navbar} ref={navbarRef}>
      <Logo />

      <button
        className={css.hamburger}
        onClick={toggleMenu}
        style={{
          display: isOverflowing ? "block" : "none",
          width: "2.5em",
          height: "2em",
        }}
        aria-label="Toggle menu"
      >
        <Menu width={32} height={32} isOpen={menuOpen} />
      </button>

      <div
        ref={linksRef}
        className={`${css.links} ${menuOpen ? css.open : ""}`}
        style={{ display: !isOverflowing || menuOpen ? "flex" : "none" }}
      >
        <Links />
      </div>
    </nav>
  );
}
