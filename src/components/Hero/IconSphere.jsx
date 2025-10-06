import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CanvasTexture, DoubleSide } from "three";
import { renderToStaticMarkup } from "react-dom/server";
import { icons } from "./Icons";

// Convert a React Icon into a CanvasTexture once
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

// Custom hook: generate all textures once
function useIconTextures(icons, size = 64, color = "#fff") {
  const [textures, setTextures] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function loadTextures() {
      const texArray = await Promise.all(
        icons.map((Icon) => createIconTexture(Icon, size, color))
      );
      if (mounted) setTextures(texArray);
    }
    loadTextures();
    return () => {
      mounted = false;
    };
  }, [icons, size, color]);

  return textures;
}

// Single icon plane
function IconMesh({ texture, position, size = 1 }) {
  const meshRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(camera.position);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial map={texture} transparent side={DoubleSide} />
    </mesh>
  );
}

// Sphere of icons
const IconSphereGroup = React.memo(() => {
  const groupRef = useRef();
  const radius = 3;
  const count = icons.length;
  const [hovered, setHovered] = useState(false);

  // Precompute positions once
  const positions = useMemo(() => {
    return icons.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return [x, y, z];
    });
  }, [count, radius]);

  const textures = useIconTextures(icons);

  // Rotate sphere, slower on hover
  useFrame(() => {
    if (groupRef.current) {
      const speed = hovered ? 0.002 : 0.01;
      groupRef.current.rotation.y += speed;
      groupRef.current.rotation.x += speed / 5;
    }
  });

  // Wait until all textures are ready
  if (textures.length !== icons.length) return null;

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {textures.map((tex, i) => (
        <IconMesh key={i} texture={tex} position={positions[i]} size={0.8} />
      ))}
    </group>
  );
});

export default function IconSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight intensity={0.75} />
      <pointLight position={[10, 10, 10]} />
      <IconSphereGroup />
    </Canvas>
  );
}
