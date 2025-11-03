import css from "./footer.module.css";
import Logo from "../Logo/rocket.jsx";
import { Link } from "react-router";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css["footer-grid"]}>
        <Logo />
        <ul className={css.links}>
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
        <div className={css.contact}>
          <div className={css.subscribe}>
            Subscriber to my Newsletter!
            <form>enter email</form>
          </div>
          <ul className={css.socials}>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <MdEmail />
            </li>
          </ul>
          {/* <div className={css.email}>athul.m.subash@gmail.com</div> */}
        </div>
      </div>
      <div className={css.copyright}>
        © 2025 Athul Subash Marottikkal. All rights reserved.
      </div>
    </footer>
  );
}
