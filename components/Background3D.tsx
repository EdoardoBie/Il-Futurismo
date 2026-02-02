import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { gsap, ScrollTrigger } from '../services/animationService';

const Geometries = () => {
  const groupRef = useRef<THREE.Group>(null);
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);
  const mesh4 = useRef<THREE.Mesh>(null);
  
  // Standard background movement
  useFrame((state) => {
    // Only apply idle animation if NOT in the immersive break (we could use a ref state, but simplified logic here)
    // We let GSAP overwrite these values during the scroll section
    
    if (groupRef.current) {
      // Gentle idle rotation
      groupRef.current.rotation.y += 0.0005;
      
      const { x, y } = state.pointer;
      // Mouse Parallax (subtle)
      const targetX = x * 1.5;
      const targetY = y * 1.5;
      
      // We use simple lerp here, but we need to be careful not to fight GSAP
      // Since GSAP will control rotation/position heavily during the break, we can leave this active
      // as GSAP's overwrite: 'auto' usually handles conflicts, or the scrub will force the value.
    }
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // THE IMMERSIVE BREAK LOGIC
      // We are controlling ThreeJS objects AND DOM elements from here for perfect sync
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#immersive-break",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          immediateRender: false // Prevent glitches on load
        }
      });

      if (!groupRef.current) return;

      // --- PHASE 1: FADE OUT INTERFACE & INTENSIFY 3D ---
      // Hide the HTML content wrapper
      tl.to("#scroll-content", { 
        autoAlpha: 0, 
        duration: 0.1 
      }, 0);
      
      // Make the 3D Canvas fully opaque and vivid (remove blend mode)
      tl.to("#canvas-container", { 
        opacity: 1, 
        mixBlendMode: 'normal',
        scale: 1, // Reset any scale
        duration: 0.2
      }, 0);

      // --- PHASE 2: 3D EXPLOSION & ZOOM ---
      
      // Move the whole group closer to camera (Zoom effect)
      tl.to(groupRef.current.position, { 
        z: 6, 
        ease: "power2.inOut" 
      }, 0);

      // Violently rotate the group
      tl.to(groupRef.current.rotation, { 
        z: Math.PI * 1, 
        x: Math.PI * 0.5,
        ease: "none" 
      }, 0);

      // EXPLODE PARTS: Move individual meshes outward
      if (mesh1.current) tl.to(mesh1.current.position, { x: -10, y: 5, z: 5 }, 0);
      if (mesh2.current) tl.to(mesh2.current.position, { x: 10, y: -5, z: 2 }, 0);
      if (mesh3.current) tl.to(mesh3.current.position, { x: 0, y: 8, z: 0 }, 0);
      if (mesh4.current) tl.to(mesh4.current.position, { x: -5, y: -8, z: -2 }, 0);

      // --- PHASE 3: EXIT & RESTORE ---
      
      // Restore UI Visibility
      tl.to("#scroll-content", { 
        autoAlpha: 1, 
        duration: 0.2 
      }, 0.85); // Start fading back in near the end

      // Restore Canvas to background mode
      tl.to("#canvas-container", { 
        opacity: 0.4, 
        mixBlendMode: 'multiply',
        duration: 0.2
      }, 0.9);

    });

    return () => ctx.revert();
  }, []);

  const materialProps = {
    color: "#ff2a00",
    roughness: 0.1,
    metalness: 0.9,
    wireframe: true 
  };

  return (
    <group ref={groupRef}>
      {/* Abstract floating shapes representing mechanical parts/debris */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={mesh1} position={[-3, 2, -5]}>
          <coneGeometry args={[1, 3, 4]} />
          <meshStandardMaterial {...materialProps} color="#1a1a1a" />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={mesh2} position={[4, -1, -8]}>
          <torusGeometry args={[1.5, 0.4, 16, 32]} />
          <meshStandardMaterial {...materialProps} color="#ff2a00" />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={mesh3} position={[0, 0, -10]}>
          <icosahedronGeometry args={[2.5, 0]} />
          <meshStandardMaterial {...materialProps} color="#333" wireframe={false} />
        </mesh>
      </Float>
      
       <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={mesh4} position={[-5, -4, -6]}>
          <boxGeometry args={[1.5, 8, 1.5]} />
          <meshStandardMaterial {...materialProps} color="#555" />
        </mesh>
      </Float>
    </group>
  );
};

const Background3D: React.FC = () => {
  return (
    <div id="canvas-container" className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply transition-all duration-500 ease-linear will-change-[opacity,transform]">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#fff" />
        <pointLight position={[-10, -10, -5]} intensity={5} color="#ff0000" />
        <Geometries />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Background3D;