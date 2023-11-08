// Model.jsx
import React from "react";
import { useGLTF } from "@react-three/drei";

import AnnontationSprite from "./Annontation";

export default function Model({ annontation1, annontation4, setAnnontation }) {
  const { nodes, materials } = useGLTF("/models/Step1-transformed.glb");

  const handleClick = (id) => {
    setAnnontation(id);
  };

  return (
    <group dispose={null} scale={40}>
      <mesh
        geometry={nodes.parenchima.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <AnnontationSprite
        position={[0.06, 0.02, 0.02]}
        handleClick={() => handleClick(1)}
        isVisible={annontation1}
      />
      <AnnontationSprite
        position={[0.06, 0.04, 0.02]}
        handleClick={() => handleClick(4)}
        isVisible={annontation4}
      />
    </group>
  );
}

useGLTF.preload("/models/Step1-transformed.glb");
