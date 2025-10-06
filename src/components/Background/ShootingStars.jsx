import { useEffect, useState } from "react";
import styles from "./stars.module.css";

export default function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).slice(2, 11); // unique key
      const newStar = {
        id,
        top: 40 + Math.random() * 20 + "%", // random vertical start
        left: Math.random() * 40 + "%", // random horizontal start
        rotate: Math.random() * (135 - 35) + 35,
      };
      setStars((prev) => [...prev, newStar]);

      // remove star after 1s (animation duration)
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id));
      }, 5000);
    }, 2000); // spawn a shooting star every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {stars.map((star) => (
        <div
          key={star.id}
          className={styles["shooting-star"]}
          style={{
            top: star.top,
            left: star.left,
            "--rotate": `${star.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}
