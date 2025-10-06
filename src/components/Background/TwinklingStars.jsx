import styles from "./stars.module.css";

export default function TwinklingStars() {
  const stars = Array.from({ length: 100 }); // 50 twinkling stars
  return (
    <div>
      {stars.map((_, i) => {
        const size = 2 + Math.random() * 2; // Random size between 2px and 4px
        const opacity = 0.5 + Math.random() * 0.5; // Random opacity for brightness (0.3 - 1)
        const duration = 1 + Math.random() * 5; // Random twinkle speed (1s - 6s)
        const delay = Math.random() * 10; // Random start delay (0s - 10s)

        return (
          <div
            key={i}
            className={styles["star-twinkle"]}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
