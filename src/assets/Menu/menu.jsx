import React from "react";
import css from "./menu.module.css";

export default function Menu({
  color = "#fff",
  width = 24,
  height = 24,
  isOpen,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <rect
        className={`${css.bar} ${css.top} ${isOpen ? css.open : ""}`}
        x="0"
        y="4"
        width="24"
        height="2"
        fill={color}
        rx="1"
      />
      <rect
        className={`${css.bar} ${css.middle} ${isOpen ? css.open : ""}`}
        x="0"
        y="11"
        width="24"
        height="2"
        fill={color}
        rx="1"
      />
      <rect
        className={`${css.bar} ${css.bottom} ${isOpen ? css.open : ""}`}
        x="0"
        y="18"
        width="24"
        height="2"
        fill={color}
        rx="1"
      />
    </svg>
  );
}
