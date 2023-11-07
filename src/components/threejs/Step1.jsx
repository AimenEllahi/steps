// Model.jsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export default function Model({ model, setAnnontation }) {
  const { nodes, materials } = useGLTF("/models/Step1-transformed.glb");
  const spriteRef = useRef();
  const texture = useLoader(TextureLoader, "/blue.png");
  const handleClick = () => {
    setAnnontation(1);
  };

  return (
    <group dispose={null} scale={40}>
      <mesh
        geometry={nodes.parenchima.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {model.annontationVisible && (
        //Change this position to change position of annotation
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "auto";
          }}
          position={[0.06, 0.02, 0.02]}
          scale={0.005}
          onClick={handleClick}
        >
          <sprite ref={spriteRef}>
            <spriteMaterial attach='material' map={texture} />
          </sprite>
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("/Step1-transformed.glb");
