import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Glowing Medical Cross in Center
function MedicalCross() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Vertical cross bar */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.34, 1.4, 0.34]} />
        <meshStandardMaterial
          color="#53D8FB"
          emissive="#2496C5"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Horizontal cross bar */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.4, 0.34, 0.34]} />
        <meshStandardMaterial
          color="#53D8FB"
          emissive="#2496C5"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Center glowing heartbeat core point */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color="#F04452"
          emissive="#F04452"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// Multi-axis Orbital Rings
function OrbitalRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((_, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.35;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.28;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.22;
  });

  return (
    <group>
      {/* Primary cyan ring */}
      <group ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#53D8FB"
            emissive="#53D8FB"
            emissiveIntensity={0.7}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>

      {/* Secondary inclined ring */}
      <group ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[2.55, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#31C48D"
            emissive="#31C48D"
            emissiveIntensity={0.5}
            transparent
            opacity={0.65}
          />
        </mesh>
      </group>

      {/* Outer subtle telemetry ring */}
      <group ref={ring3Ref} rotation={[0, Math.PI / 4, Math.PI / 3]}>
        <mesh>
          <torusGeometry args={[2.9, 0.012, 16, 100]} />
          <meshStandardMaterial
            color="#8995AA"
            emissive="#53D8FB"
            emissiveIntensity={0.3}
            transparent
            opacity={0.45}
          />
        </mesh>
      </group>
    </group>
  );
}

// Translucent Glass Shield Sphere
function ProtectiveShieldSphere() {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.12;
      sphereRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={sphereRef}>
      {/* Outer translucent protective sphere */}
      <mesh>
        <sphereGeometry args={[1.75, 48, 48]} />
        <meshPhysicalMaterial
          color="#111A2E"
          transparent
          opacity={0.28}
          roughness={0.15}
          metalness={0.1}
          transmission={0.6}
          thickness={0.8}
          emissive="#53D8FB"
          emissiveIntensity={0.15}
          wireframe={false}
        />
      </mesh>
      {/* Geodesic wireframe accent for high-tech aesthetic */}
      <mesh>
        <icosahedronGeometry args={[1.76, 2]} />
        <meshBasicMaterial
          color="#53D8FB"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>
    </group>
  );
}

// Interconnected Emergency Service Nodes (Hospital, Responder, Patient)
function NetworkNodes() {
  const nodesGroupRef = useRef();

  // Positions of nodes around the sphere representing emergency network
  const nodes = useMemo(
    () => [
      { pos: [1.8, 0.9, 0.8], color: "#53D8FB", label: "Hospital Trauma Hub" },
      { pos: [-1.6, -1.1, 0.9], color: "#31C48D", label: "Paramedic Unit 08" },
      { pos: [0.8, -1.7, -0.6], color: "#F04452", label: "Emergency Victim" },
      { pos: [-1.4, 1.4, -0.7], color: "#53D8FB", label: "Regional Blood Center" },
      { pos: [0.4, 2.0, -0.9], color: "#31C48D", label: "Volunteer Mesh" },
    ],
    []
  );

  useFrame((state, delta) => {
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={nodesGroupRef}>
      {nodes.map((node, i) => (
        <group key={i} position={node.pos}>
          {/* Luminous Core Node */}
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={1.5}
            />
          </mesh>
          {/* Pulsing halo */}
          <mesh>
            <sphereGeometry args={[0.13, 16, 16]} />
            <meshBasicMaterial
              color={node.color}
              transparent
              opacity={0.25}
              wireframe
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Ambient Floating Bio-Cyber Particles
function ParticleField() {
  const count = 75;
  const pointsRef = useRef();

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [pos];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x -= delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#53D8FB"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Scene Root with gentle pointer parallax
function InteractiveScene({ mousePos }) {
  const rootRef = useRef();

  useFrame(() => {
    if (rootRef.current) {
      // Gentle dampening to follow mouse
      rootRef.current.rotation.x = THREE.MathUtils.lerp(
        rootRef.current.rotation.x,
        mousePos.y * 0.35,
        0.05
      );
      rootRef.current.rotation.y = THREE.MathUtils.lerp(
        rootRef.current.rotation.y,
        mousePos.x * 0.35,
        0.05
      );
    }
  });

  return (
    <group ref={rootRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <MedicalCross />
        <ProtectiveShieldSphere />
        <OrbitalRings />
        <NetworkNodes />
      </Float>
      <ParticleField />
    </group>
  );
}

// Fallback when WebGL is unavailable or user prefers reduced motion
function FallbackHeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[420px]">
      <div className="absolute w-72 h-72 rounded-full bg-[#53D8FB]/10 blur-3xl animate-pulse"></div>
      <div className="relative z-10 w-64 h-64 rounded-full border border-[#53D8FB]/40 flex items-center justify-center bg-[#111A2E]/60 backdrop-blur-xl shadow-[0_0_50px_rgba(83,216,251,0.2)]">
        {/* Orbital rings CSS */}
        <div className="absolute inset-[-18px] rounded-full border border-dashed border-[#53D8FB]/30 animate-spin" style={{ animationDuration: '24s' }}></div>
        <div className="absolute inset-[-36px] rounded-full border border-[#31C48D]/20 animate-spin" style={{ animationDuration: '36s', animationDirection: 'reverse' }}></div>
        
        {/* Central Medical Shield Motif */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="w-6 h-16 bg-[#53D8FB] rounded-sm shadow-[0_0_20px_#53D8FB]"></div>
            <div className="absolute w-16 h-6 bg-[#53D8FB] rounded-sm shadow-[0_0_20px_#53D8FB]"></div>
            <div className="absolute w-4 h-4 rounded-full bg-[#F04452] shadow-[0_0_12px_#F04452]"></div>
          </div>
          <span className="mt-6 text-xs uppercase tracking-widest text-[#53D8FB] font-mono">
            ResQ Core Active
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero3DCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  if (!hasWebGL || prefersReducedMotion) {
    return <FallbackHeroVisual />;
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      className="relative w-full h-[460px] md:h-[540px] lg:h-[600px] cursor-grab active:cursor-grabbing select-none"
      title="Interactive 3D Emergency Core — Move cursor to orbit"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFFFFF" />
        <pointLight position={[-4, -3, -2]} intensity={2.5} color="#53D8FB" distance={15} />
        <pointLight position={[3, 4, 2]} intensity={2.0} color="#31C48D" distance={12} />
        <pointLight position={[0, 0, 3]} intensity={1.5} color="#F04452" distance={8} />

        <InteractiveScene mousePos={mousePos} />
      </Canvas>

      {/* Floating high-tech telemetry HUD overlay badges */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none text-[11px] font-mono text-[#8995AA]/80">
        <div className="flex items-center gap-2 bg-[#111A2E]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          <span className="w-2 h-2 rounded-full bg-[#31C48D] animate-ping"></span>
          <span>Core Mesh: 100% Biometric Uptime</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-[#111A2E]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          <span>Interactive 3D Viewport</span>
        </div>
      </div>
    </div>
  );
}
