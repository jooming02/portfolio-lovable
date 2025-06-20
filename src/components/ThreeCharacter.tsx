
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedCharacter = () => {
  const meshRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Head */}
      <Sphere ref={headRef} args={[0.8]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#8B5CF6" />
      </Sphere>
      
      {/* Body */}
      <Box args={[1, 1.5, 0.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#6366F1" />
      </Box>
      
      {/* Arms */}
      <Box args={[0.3, 1, 0.3]} position={[-0.8, 0.2, 0]}>
        <meshStandardMaterial color="#4F46E5" />
      </Box>
      <Box args={[0.3, 1, 0.3]} position={[0.8, 0.2, 0]}>
        <meshStandardMaterial color="#4F46E5" />
      </Box>
      
      {/* Legs */}
      <Box args={[0.3, 1.2, 0.3]} position={[-0.3, -1.5, 0]}>
        <meshStandardMaterial color="#3730A3" />
      </Box>
      <Box args={[0.3, 1.2, 0.3]} position={[0.3, -1.5, 0]}>
        <meshStandardMaterial color="#3730A3" />
      </Box>
      
      {/* Floating elements around character */}
      <Torus args={[0.3, 0.1]} position={[-2, 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#EC4899" />
      </Torus>
      <Torus args={[0.25, 0.08]} position={[2, 1, 0]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#10B981" />
      </Torus>
    </group>
  );
};

const ThreeCharacter = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#8B5CF6" />
        
        <AnimatedCharacter />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
};

export default ThreeCharacter;
