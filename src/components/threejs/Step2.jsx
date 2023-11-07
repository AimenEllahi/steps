import React from "react";
import AnnontationSprite from "./Annontation";
import { useGLTF } from "@react-three/drei";

const Step2 = ({ annontation2, setAnnontation }) => {
  const { nodes, materials } = useGLTF("/models/Step2.glb");
  const handleClick = () => {
    setAnnontation(2);
  };

  return (
    <group dispose={null} scale={40}>
      <mesh
        geometry={nodes.slf.geometry}
        material={materials["material_0.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {/* //Change this position to change position of annotation */}
        <AnnontationSprite
          position={[0, 0.03, -0.01]}
          handleClick={handleClick}
          isVisible={annontation2}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/Step2.glb");

export default Step2;
