import React from "react";
import AnnontationSprite from "./Annontation";
import { useGLTF } from "@react-three/drei";

const Step3 = ({ annontation3, setAnnontation }) => {
  const { nodes, materials } = useGLTF("/models/Step3.glb");
  const handleClick = (id) => {
    setAnnontation(id);
  };

  return (
    <group dispose={null} scale={40}>
      <mesh
        geometry={nodes.insula.geometry}
        material={materials["material_0.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {/* //Change this position to change position of annotation */}
        <AnnontationSprite
          position={[0, -0.01, -0.02]}
          handleClick={() => handleClick(3)}
          isVisible={annontation3}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/Step3.glb");
export default Step3;
