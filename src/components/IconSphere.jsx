// IconSphere.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaUnity,
} from "react-icons/fa";
import {
  SiC,
  SiArchlinux,
  SiWayland,
  SiHyprland,
  SiBlender,
  SiGnubash,
} from "react-icons/si";
import { TbTerminal, TbBrandCSharp } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";

// Put all icons in an array
const icons = [
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  VscVscodeInsiders,
  TbBrandCSharp,
  SiC,
  FaGithub,
  FaGitAlt,
  SiArchlinux,
  SiHyprland,
  SiWayland,
  FaLinux,
  SiGnubash,
  TbTerminal,
  FaUnity,
  SiBlender,
];

function IconSphereGroup() {
  const groupRef = useRef();
  const radius = 3; // radius of the sphere
  const count = icons.length;

  // Position icons evenly on sphere using spherical coordinates
  const positions = icons.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / count); // latitude
    const theta = Math.PI * (1 + Math.sqrt(5)) * i; // longitude
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    return [x, y, z];
  });

  // Rotate the group
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // rotation speed
      groupRef.current.rotation.x += 0.002; // slight x rotation
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map((IconComponent, i) => (
        <Html
          key={i}
          position={positions[i]}
          style={{ fontSize: "2rem", color: "#ffffff" }} // adjust icon color/size
        >
          <IconComponent />
        </Html>
      ))}
    </group>
  );
}

export default function IconSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <IconSphereGroup />
    </Canvas>
  );
}
