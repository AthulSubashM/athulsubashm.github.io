// IconSphereGPUBillboard.js
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CanvasTexture, DoubleSide } from "three";
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

import { renderToStaticMarkup } from "react-dom/server";

// All icons
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

// Create a canvas texture from a React Icon
function createIconTexture(IconComponent, size = 128, color = "#ffffff") {
  const svgString = renderToStaticMarkup(
    <IconComponent size={size} color={color} />
  );
  const svgBlob = new Blob([svgString], {
    type: "image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
      const texture = new CanvasTexture(canvas);
      resolve(texture);
    };
  });
}

// Single icon mesh
function IconMesh({ IconComponent, position, size = 1 }) {
  const [texture, setTexture] = useState(null);
  const meshRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    createIconTexture(IconComponent, 64).then((tex) => setTexture(tex));
  }, [IconComponent]);

  // Make the icon always face the camera (billboard)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(camera.position);
    }
  });

  if (!texture) return null;

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial
        map={texture}
        transparent
        side={DoubleSide} // visible from both sides
      />
    </mesh>
  );
}

// Sphere of icons
const IconSphereGroup = React.memo(() => {
  const groupRef = useRef();
  const radius = 3;
  const count = icons.length;
  const [hovered, setHovered] = useState(false);

  // Precompute positions
  const positions = useMemo(
    () =>
      icons.map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        return [x, y, z];
      }),
    [count, radius]
  );

  // Rotate the sphere with hover slowdown
  useFrame(() => {
    if (groupRef.current) {
      const speed = hovered ? 0.002 : 0.01;
      groupRef.current.rotation.y += speed;
      groupRef.current.rotation.x += speed / 5;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {icons.map((IconComponent, i) => (
        <IconMesh
          key={i}
          IconComponent={IconComponent}
          position={positions[i]}
          size={0.8}
        />
      ))}
    </group>
  );
});

export default function IconSphereGPU() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.75} />
      <pointLight position={[10, 10, 10]} />
      <IconSphereGroup />
    </Canvas>
  );
}
