import IconSphere from "./IconSphere";
import HeroText from "./HeroText";
import style from "../home.module.css";

export default function Hero() {
  return (
    <div className={style.hero}>
      <IconSphere />
      <HeroText />
    </div>
  );
}
