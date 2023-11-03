import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Model } from "./threejs/Isometric-cityscape13";
import { gsap } from "gsap";
import Loader from "./Loader";

function Scene() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Canvas camera={{ position: [76, 12, -24] }}>
        <Suspense fallback={<Loader />}>
          <fog attach="fog" args={["#fff", 0, 110]} />
          <Environment preset="dawn" />
          {/* <ambientLight color={0xffa500} intensity={2} /> */}
          <directionalLight
            color={0xffa500}
            position={[0, 10, 0]}
            intensity={5}
          />
          <directionalLight
            color={0xffa500}
            position={[10, 10, 10]}
            intensity={5}
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
