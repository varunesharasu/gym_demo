import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";
import "./DumbbellModel.css";

function Dumbbell() {
  const ref = useRef<Group>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.4;
  });
  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 2.2, 32]} />
        <meshStandardMaterial color="#8a8a8a" metalness={0.9} roughness={0.3} />
      </mesh>
      {[-1, 1].map((x) => (
        <group key={x} position={[0, x * 1.2, 0]}>
          <mesh>
            <cylinderGeometry args={[0.7, 0.7, 0.35, 48]} />
            <meshStandardMaterial color="#222" metalness={0.6} roughness={0.4} />
          </mesh>
          <mesh position={[0, x * 0.22, 0]}>
            <cylinderGeometry args={[0.72, 0.72, 0.08, 48]} />
            <meshStandardMaterial color="#E11D48" metalness={0.5} roughness={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function DumbbellModel() {
  return (
    <div className="model-wrap">
      <Canvas camera={{ position: [3, 2, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#E11D48" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.2}>
          <Dumbbell />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}