import IconSphere from "./IconSphere";
import HeroText from "./HeroText";
import css from "../home.module.css";

export default function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.sphere}>
        <IconSphere />
      </div>
      <HeroText />
    </div>
  );
}
