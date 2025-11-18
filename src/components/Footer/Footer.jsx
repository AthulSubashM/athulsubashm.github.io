import css from "./footer.module.css";
import Logo from "../../assets/Logo/rocket.jsx";
import Links from "../Navbar/Links.jsx";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={css.footer} id="footer">
      <div className={css["footer-grid"]}>
        <div className={css["footer-logo"]}>
          <Logo />
        </div>
        <Links />
        <div className={css.contact}>
          <div className={css.subscribe}>
            Subscriber to my Newsletter!
            <form>enter email</form>
          </div>
          <ul className={css.socials}>
            <li>
              <a
                href="https://github.com/AthulSubashM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/athulmsubash/"
                target="_blank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/athulxo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="mailto:athul.m.subash@gmail.com">
                <MdEmail />
              </a>
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
