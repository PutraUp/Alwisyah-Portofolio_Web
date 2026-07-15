
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();

  
  const textures = useTexture({
    upper: '/textures/upper_d.png',
    base: '/textures/am_ams_basebody.png'
  });

  
  textures.upper.flipY = false;
  textures.base.flipY = false;

  
  scene.traverse((child) => {
    if (child.isMesh) {
      
      if (child.material) {
        
        if (!child.material.map || child.material.color.r === 1) {
          
          child.material = new THREE.MeshStandardMaterial({
            map: textures.upper, 
            roughness: 0.4,
            metalness: 0.8
          });
          
          child.material.needsUpdate = true;
        }
      }
    }
    
  });

  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    modelRef.current.position.y = Math.sin(t * 1.5) * 0.1;
    modelRef.current.rotation.y = t * 0.2;
  });

  return <primitive ref={modelRef} object={scene} scale={1.0} />;
}



export default function RobotModel({ fileName }) {
  return (
    <div className="w-full h-[460px] cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 15, 40], fov: 45 }} 
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={1.5} /> 
        <pointLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#a855f7" />
        
        <Environment preset="studio" />

        <Center>
          <Model url={`/${fileName}`} />
        </Center>

        <OrbitControls 
          enableZoom={false} 
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}