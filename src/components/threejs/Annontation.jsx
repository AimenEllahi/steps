import React from "react";
import { useState, useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
export default function AnnontationSprite({
  position,
  isVisible,
  handleClick,
}) {
  const ref = useRef();

  const texture = useLoader(TextureLoader, "/blue.png");

  useEffect(() => {
   
    if (isVisible) {
      ref.current.scale.set(0.005, 0.005, 0.005);
    } else {
      ref.current.scale.set(0, 0, 0);
    }
  }, [isVisible]);

  return (
    <mesh
      onPointerOver={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "auto";
      }}
      position={position}
      scale={0.005}
      onClick={handleClick}
      ref={ref}
    >
      <sprite>
        <spriteMaterial id={position.z} attach='material' map={texture} />
      </sprite>
    </mesh>
  );
}
