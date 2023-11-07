import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useControls } from "leva";

function Step2({ props, index, toggleDescriptionVisibility }) {
  const gltf = useLoader(GLTFLoader, "/models/Step2.glb");
  const spriteRef = useRef();
  const texture = useLoader(TextureLoader, "/blue.png");
  const handleClick = () => {
    toggleDescriptionVisibility(index);
  };

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <primitive object={gltf.scene} dispose={null} scale={40}>
        <mesh
          position={[0, 0.05, 0.06999999999999997]}
          scale={0.005}
          onClick={handleClick}
        >
          <sprite>
            <spriteMaterial attach="material" map={texture} />
          </sprite>
        </mesh>
      </primitive>
    </group>
  );
}

export default Step2;
