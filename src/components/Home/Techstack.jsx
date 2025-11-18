import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { icons } from "./Hero/Icons.js";

export default function Techstack() {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Define grid positions for icons
  const columns = 5; // number of icons per row
  const iconGap = 20; // px gap
  const iconSize = 60; // width/height in px

  // Reverse the icons array for display order
  const reversedIcons = [...icons].reverse();

  const targetPositions = reversedIcons.map((_, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;
    return { x: col * (iconSize + iconGap), y: row * (iconSize + iconGap) };
  });

  const springs = useSprings(
    icons.length,
    reversedIcons.map((_, i) => ({
      from: { x: 0, y: 0, scale: 0, opacity: 0 }, // spawn from top-left
      to: inView
        ? {
            x: targetPositions[i].x,
            y: targetPositions[i].y,
            scale: 1,
            opacity: 1,
          }
        : { x: 0, y: 0, scale: 0, opacity: 0 },
      delay: inView ? (icons.length - 1 - i) * 60 : i * 60,
      config: { mass: 1, tension: 170, friction: 26 },
    }))
  );

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "0",
        position: "relative", // needed for absolute children
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "20rem",
          margin: "5rem 2rem",
        }}
      >
        {springs.map((props, i) => {
          const IconComponent = reversedIcons[i];
          return (
            <animated.div
              key={i}
              style={{
                position: "absolute", // absolute inside container
                left: props.x,
                top: props.y,
                transform: props.scale.to((s) => `scale(${s})`),
                opacity: props.opacity,
              }}
            >
              <IconComponent size={50} color="#ffffff" />
            </animated.div>
          );
        })}
      </div>
    </section>
  );
}
