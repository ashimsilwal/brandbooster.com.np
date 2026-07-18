import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed = 1, distort = 0.4, scale = 1, geometry = 'sphere' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 32, 32]} />;
    }
  };

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {getGeometry()}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={speed * 2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.65}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef();
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#1db954"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#e1306c" />
      <pointLight position={[5, -3, 3]} intensity={0.2} color="#00f2fe" />
      <pointLight position={[0, 5, -5]} intensity={0.2} color="#1877f2" />

      {/* Instagram - Pink sphere */}
      <FloatingShape
        position={[-4, 1.5, -2]}
        color="#e1306c"
        speed={0.8}
        distort={0.5}
        scale={0.8}
        geometry="sphere"
      />

      {/* TikTok - Cyan torus */}
      <FloatingShape
        position={[4, -1, -3]}
        color="#00f2fe"
        speed={1.2}
        distort={0.3}
        scale={0.7}
        geometry="torus"
      />

      {/* YouTube - Red octahedron */}
      <FloatingShape
        position={[3, 2, -4]}
        color="#ff0000"
        speed={0.6}
        distort={0.4}
        scale={0.65}
        geometry="octahedron"
      />

      {/* Facebook - Blue icosahedron */}
      <FloatingShape
        position={[-3.5, -1.5, -3]}
        color="#1877f2"
        speed={1}
        distort={0.35}
        scale={0.6}
        geometry="icosahedron"
      />

      {/* Green accent - dodecahedron */}
      <FloatingShape
        position={[0, -2.5, -5]}
        color="#1db954"
        speed={0.5}
        distort={0.6}
        scale={0.5}
        geometry="dodecahedron"
      />

      {/* Extra small shapes */}
      <FloatingShape position={[-2, 3, -6]} color="#ff0050" speed={1.5} distort={0.3} scale={0.3} geometry="sphere" />
      <FloatingShape position={[2, -3, -4]} color="#fcb045" speed={0.9} distort={0.4} scale={0.35} geometry="octahedron" />

      <ParticleField />
      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={0.5} />

      <fog attach="fog" args={['#0a0e17', 8, 25]} />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ background: 'transparent' }}
    >
      <SceneContent />
    </Canvas>
  );
}
