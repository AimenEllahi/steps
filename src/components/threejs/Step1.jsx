// Model.jsx
import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export default function Model({ props, index, toggleDescriptionVisibility }) {
  const { nodes, materials } = useGLTF("/models/Step1-transformed.glb");
  const spriteRef = useRef();
  const texture = useLoader(TextureLoader, "/blue.png");
  const handleClick = () => {
    toggleDescriptionVisibility(index);
  };

  return (
    <group {...props} dispose={null} scale={40}>
      <mesh
        geometry={nodes.parenchima.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        position={[0, 0.05, 0.06999999999999997]}
        scale={0.005}
        onClick={handleClick}
      >
        <sprite ref={spriteRef}>
          <spriteMaterial attach="material" map={texture} />
        </sprite>
      </mesh>
    </group>
  );
}

useGLTF.preload("/Step1-transformed.glb");
