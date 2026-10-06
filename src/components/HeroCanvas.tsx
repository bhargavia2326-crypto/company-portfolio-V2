import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Refractive Glass Material definition for physical acrylic/glass
const createGlassMaterial = (color = '#ffffff', opacity = 0.95, roughness = 0.08, thickness = 1.6) => {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    transmission: 0.92,
    opacity,
    transparent: true,
    roughness,
    ior: 1.52,
    thickness,
    specularIntensity: 1.2,
    clearcoat: 0.9,
    clearcoatRoughness: 0.08,
  });
};

const TechnologyEcosystem: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const neuralRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const cube1Ref = useRef<THREE.Mesh>(null);
  const shieldRef = useRef<THREE.Mesh>(null);

  // Organic continuous motion and mouse parallax
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouse = state.pointer;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.35 + Math.sin(t * 0.28) * 0.08,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouse.y * 0.25 + Math.cos(t * 0.22) * 0.04,
        0.05
      );
    }

    if (neuralRef.current && innerCoreRef.current) {
      neuralRef.current.rotation.y = t * 0.32;
      neuralRef.current.rotation.x = Math.sin(t * 0.45) * 0.15;
      innerCoreRef.current.rotation.y = -t * 0.5;
    }

    if (cube1Ref.current) {
      cube1Ref.current.rotation.y += 0.003;
    }

    if (shieldRef.current) {
      shieldRef.current.rotation.y = 0.35 + Math.cos(t * 0.35) * 0.06;
    }
  });

  // Shield Geometry Creation
  const shieldGeo = React.useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.48);
    shape.lineTo(0.38, 0.35);
    shape.lineTo(0.34, -0.15);
    shape.lineTo(0, -0.48);
    shape.lineTo(-0.34, -0.15);
    shape.lineTo(-0.38, 0.35);
    shape.closePath();

    const extrudeSettings = {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04
    };
    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }, []);

  // Connection Tube Curves
  const connectionGeoA = React.useMemo(() => {
    const points = [
      new THREE.Vector3(0.1, 0.45, 0.2),
      new THREE.Vector3(-0.45, 0.2, 0.1),
      new THREE.Vector3(-1.15, -0.2, 0.65)
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 24, 0.015, 8, false);
  }, []);

  const connectionGeoB = React.useMemo(() => {
    const points = [
      new THREE.Vector3(0.1, 0.45, 0.2),
      new THREE.Vector3(0.65, 0.0, 0.4),
      new THREE.Vector3(1.05, -0.3, 0.55)
    ];
    const curve = new THREE.CatmullRomCurve3(points);
    return new THREE.TubeGeometry(curve, 24, 0.014, 8, false);
  }, []);

  return (
    <group ref={groupRef}>
      {/* 1. CENTRAL FROSTED GLASS PEDESTAL PLATFORM */}
      <group position={[0, -1.2, 0]}>
        {/* Main bevelled clear glass platform disc */}
        <mesh>
          <cylinderGeometry args={[2.0, 2.05, 0.12, 64]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.94}
            opacity={1}
            transparent
            roughness={0.06}
            ior={1.52}
            thickness={1.9}
            specularIntensity={1.4}
            clearcoat={1.0}
            clearcoatRoughness={0.08}
          />
        </mesh>

        {/* Polished inner metal tray */}
        <mesh position={[0, 0.07, 0]}>
          <cylinderGeometry args={[1.7, 1.7, 0.02, 64]} />
          <meshStandardMaterial color="#edeef7" metalness={0.85} roughness={0.2} />
        </mesh>

        {/* Glowing edge ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
          <torusGeometry args={[2.02, 0.025, 16, 64]} />
          <meshStandardMaterial color="#c4b5fd" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* 2. CENTRAL AI NEURAL CRYSTAL (Float) */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <group position={[0.1, 0.45, 0.2]}>
          <mesh ref={neuralRef}>
            <icosahedronGeometry args={[0.48, 0]} />
            <meshPhysicalMaterial
              color="#826bf8"
              transmission={0.88}
              opacity={0.95}
              transparent
              roughness={0.08}
              ior={1.48}
              thickness={1.6}
              specularIntensity={1.2}
              clearcoat={0.8}
            />
          </mesh>
          <mesh ref={innerCoreRef}>
            <icosahedronGeometry args={[0.2, 0]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>
      </Float>

      {/* 3. SECURITY SHIELD GEOMETRY (Float) */}
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
        <group position={[-1.15, -0.2, 0.65]} rotation={[0.15, 0.35, -0.1]}>
          <mesh ref={shieldRef} geometry={shieldGeo}>
            <meshPhysicalMaterial
              color="#3730a3"
              transmission={0.76}
              opacity={0.95}
              transparent
              roughness={0.12}
              ior={1.5}
              thickness={1.5}
            />
          </mesh>
          {/* Luminous cyan emblem */}
          <mesh position={[0, 0, 0.12]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        </group>
      </Float>

      {/* 4. TRANSLUCENT CUBES & ACRYLIC BLOCKS */}
      {/* Cube 1: Large clear glass cube (Foreground Right) */}
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.5}>
        <group position={[1.05, -0.3, 0.55]} rotation={[0.25, -0.38, 0.12]}>
          <mesh ref={cube1Ref}>
            <boxGeometry args={[0.72, 0.72, 0.72]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transmission={0.94}
              opacity={1}
              transparent
              roughness={0.06}
              ior={1.52}
              thickness={1.9}
              specularIntensity={1.3}
              clearcoat={0.9}
            />
          </mesh>
          {/* Glowing inner micro core */}
          <mesh>
            <boxGeometry args={[0.26, 0.26, 0.26]} />
            <meshBasicMaterial color="#a855f7" />
          </mesh>
        </group>
      </Float>

      {/* Cube 2: Floating lavender acrylic cube (Background Top-Left) */}
      <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.7}>
        <mesh position={[-1.25, 0.95, -0.4]} rotation={[-0.3, 0.45, 0.2]}>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
          <meshPhysicalMaterial
            color="#c4b5fd"
            transmission={0.84}
            opacity={0.92}
            transparent
            roughness={0.14}
            ior={1.46}
            thickness={1.3}
          />
        </mesh>
      </Float>

      {/* Cube 3: Micro violet satellite cube (Background Right) */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh position={[1.35, 0.85, -0.3]} rotation={[0.35, -0.4, 0.15]}>
          <boxGeometry args={[0.38, 0.38, 0.38]} />
          <meshPhysicalMaterial
            color="#826bf8"
            transmission={0.85}
            opacity={0.95}
            transparent
            roughness={0.1}
            ior={1.48}
            thickness={1.4}
          />
        </mesh>
      </Float>

      {/* 5. REFRACTIVE GLASS CYLINDERS */}
      {/* Cylinder 1: Center-Left Tall Clear Conduit */}
      <group position={[-0.45, -0.15, -0.1]}>
        <mesh>
          <cylinderGeometry args={[0.28, 0.28, 1.9, 32, 1, true]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.94}
            opacity={1}
            transparent
            roughness={0.06}
            ior={1.52}
            thickness={1.8}
            clearcoat={0.9}
          />
        </mesh>
        {/* Internal fluid core */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 1.35, 32]} />
          <meshPhysicalMaterial
            color="#826bf8"
            transmission={0.86}
            opacity={0.95}
            transparent
            roughness={0.1}
            ior={1.48}
            thickness={1.5}
          />
        </mesh>
      </group>

      {/* Cylinder 2: Center-Right Medium Lavender Conduit */}
      <mesh position={[0.48, -0.45, 0.15]}>
        <cylinderGeometry args={[0.25, 0.25, 1.25, 32, 1, true]} />
        <meshPhysicalMaterial
          color="#c4b5fd"
          transmission={0.82}
          opacity={0.92}
          transparent
          roughness={0.14}
          ior={1.46}
          thickness={1.3}
        />
      </mesh>

      {/* 6. ABSTRACT DATA SLABS */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[-0.35, 1.2, 0.1]} rotation={[0.2, 0.45, -0.15]}>
          <boxGeometry args={[0.85, 0.14, 0.55]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.92}
            opacity={1}
            transparent
            roughness={0.08}
            ior={1.5}
            thickness={1.6}
          />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0.4, 1.3, -0.2]} rotation={[-0.25, -0.35, 0.2]}>
          <boxGeometry args={[0.85, 0.14, 0.55]} />
          <meshPhysicalMaterial
            color="#826bf8"
            transmission={0.86}
            opacity={0.95}
            transparent
            roughness={0.1}
            ior={1.48}
            thickness={1.4}
          />
        </mesh>
      </Float>

      {/* 7. SMALL FLOATING SPHERES */}
      {/* Mercury Chrome Orb */}
      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[-0.55, -0.7, 0.85]}>
          <sphereGeometry args={[0.26, 36, 36]} />
          <meshStandardMaterial color="#f8fafc" metalness={0.98} roughness={0.03} />
        </mesh>
      </Float>

      {/* Crystal Bubble Spheres */}
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh position={[1.4, -0.55, 0.65]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.95}
            opacity={1}
            transparent
            roughness={0.04}
            ior={1.52}
            thickness={1.5}
          />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh position={[0.9, 0.35, 0.85]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshPhysicalMaterial
            color="#c4b5fd"
            transmission={0.85}
            opacity={0.92}
            transparent
            roughness={0.1}
            ior={1.46}
            thickness={1.2}
          />
        </mesh>
      </Float>

      {/* 8. LUMINOUS CONNECTION LINES */}
      <mesh geometry={connectionGeoA}>
        <meshBasicMaterial color="#9333ea" transparent opacity={0.65} />
      </mesh>
      <mesh geometry={connectionGeoB}>
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.55} />
      </mesh>

      {/* Realistic Soft Contact Shadows */}
      <ContactShadows
        position={[0, -1.3, 0]}
        opacity={0.65}
        scale={4.8}
        blur={2.4}
        far={2.5}
        color="#2e1065"
      />
    </group>
  );
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="relative w-full h-[520px] lg:h-[620px] xl:h-[680px] flex items-center justify-center pointer-events-none select-none">
      <Canvas
        className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
        gl={{ 
          alpha: true, 
          antialias: true, 
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 1.1, 5.8]} fov={40} />

        {/* Violet Lighting Setup */}
        <ambientLight intensity={1.3} />
        <pointLight position={[2.8, 3.8, 3.2]} color="#7c66dc" intensity={5.5} distance={20} />
        <pointLight position={[-3.2, -0.8, 2.8]} color="#38bdf8" intensity={3.6} distance={18} />
        <directionalLight position={[0.5, 6, 2.5]} color="#fff8f0" intensity={2.8} />
        <pointLight position={[0, -1.8, 0.5]} color="#9333ea" intensity={2.8} distance={8} />

        {/* 3D Technology Ecosystem */}
        <TechnologyEcosystem />
      </Canvas>
    </div>
  );
};
