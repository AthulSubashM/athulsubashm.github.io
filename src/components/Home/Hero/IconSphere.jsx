import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CanvasTexture, DoubleSide, Vector3 } from "three";
import { renderToStaticMarkup } from "react-dom/server";
import { icons } from "./Icons.js";

// Convert React icon to CanvasTexture
function createIconTexture(IconComponent, size = 128, color = "#fff") {
  const svgString = renderToStaticMarkup(
    <IconComponent size={size} color={color} />
  );
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      canvas.getContext("2d").drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
      resolve(new CanvasTexture(canvas));
    };
  });
}

// Hook to load textures
function useIconTextures(icons, size = 64) {
  const [textures, setTextures] = useState([]);
  useEffect(() => {
    let mounted = true;
    async function load() {
      const texArray = await Promise.all(
        icons.map((Icon) => createIconTexture(Icon, size))
      );
      if (mounted) setTextures(texArray);
    }
    load();
    return () => (mounted = false);
  }, [icons, size]);
  return textures;
}

// Single icon mesh
function IconMesh({ texture, positionRef, size = 1 }) {
  const meshRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.lookAt(camera.position);
    meshRef.current.position.copy(positionRef.current);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial map={texture} transparent side={DoubleSide} />
    </mesh>
  );
}

// Group of icons
function IconSphereGroup() {
  const groupRef = useRef();
  const radius = 3;
  const count = icons.length;
  const [hovered, setHovered] = useState(false);
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = window.innerHeight * 1.5;
      const factor = Math.min(window.scrollY / maxScroll, 1);
      setScrollFactor(factor);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Original sphere positions
  const initialPositions = useMemo(() => {
    return icons.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return new Vector3(x, y, z);
    });
  }, [count, radius]);

  const textures = useIconTextures(icons);

  // Current positions (updated each frame)
  const currentPositions = useRef(initialPositions.map((p) => p.clone()));

  useFrame(() => {
    if (!groupRef.current) return;

    if (scrollFactor < 0.001) {
      // Rotate sphere
      const speed = hovered ? 0.002 : 0.01;
      groupRef.current.rotation.y += speed;
      groupRef.current.rotation.x += speed / 5;
    } else {
      groupRef.current.rotation.set(0, 0, 0);

      // Target positions for line
      const targetY = -15;
      const targetX = -10;

      // Leader goes to line target
      currentPositions.current[0].lerp(new Vector3(targetX, targetY, 0), 0.05);

      // All others follow previous
      for (let i = 1; i < currentPositions.current.length; i++) {
        currentPositions.current[i].lerp(currentPositions.current[i - 1], 0.2);
      }
    }

    // If scrollFactor is small, lerp back to sphere
    if (scrollFactor < 0.01) {
      for (let i = 0; i < currentPositions.current.length; i++) {
        currentPositions.current[i].lerp(initialPositions[i], 0.1);
      }
    }
  });

  if (textures.length !== icons.length) return null;

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {textures.map((tex, i) => (
        <IconMesh
          key={i}
          texture={tex}
          positionRef={{ current: currentPositions.current[i] }}
          size={1}
        />
      ))}
    </group>
  );
}

// Main component
export default function IconSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
      <ambientLight intensity={0.75} />
      <pointLight position={[10, 10, 10]} />
      <IconSphereGroup />
    </Canvas>
  );
}
