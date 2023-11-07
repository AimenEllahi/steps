import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Step2({ model, setAnnontation }) {
  const gltf = useLoader(GLTFLoader, "/models/Step2.glb");

  const texture = useLoader(TextureLoader, "/blue.png");
  const handleClick = () => {
    setAnnontation(2);
  };

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <primitive object={gltf.scene} dispose={null} scale={40}>
        {model.annontationVisible && (
          //Change this position to change position of annotation
          <mesh
            onPointerOver={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "auto";
            }}
            position={[0.01, 0.02, 0.03]}
            scale={0.005}
            onClick={handleClick}
          >
            <sprite>
              <spriteMaterial attach='material' map={texture} />
            </sprite>
          </mesh>
        )}
      </primitive>
    </group>
  );
}

export default Step2;
