import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/Step1-transformed.glb");
  return (
    <group {...props} dispose={null} scale={40}>
      <mesh
        geometry={nodes.parenchima.geometry}
        material={materials.material_0}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Step1-transformed.glb");
