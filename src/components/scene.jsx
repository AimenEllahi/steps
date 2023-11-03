// Scene.jsx
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei"; // Import ContactShadows
import Step1 from "./threejs/Step1";
import Step2 from "./threejs/Step2";
import Step3 from "./threejs/Step3";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

function Scene() {
  const [models, setModels] = useState([
    { name: "Step 1", visible: true },
    { name: "Step 2", visible: true },
    { name: "Step 3", visible: true },
  ]);

  const toggleModelVisibility = (index) => {
    const updatedModels = [...models];
    updatedModels[index].visible = !updatedModels[index].visible;
    setModels(updatedModels);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-4/5">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 10], fov: 50 }}>
          <fog attach="fog" args={["#fff", 0, 110]} />
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Suspense fallback={<Loader />}>
            {models[0].visible && <Step1 />}
            {models[1].visible && <Step2 />}
            {models[2].visible && <Step3 />}
          </Suspense>
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -4.5, 0]}
            opacity={1}
            width={20}
            height={10}
            blur={0.3}
            far={10.5}
          />
        </Canvas>
      </div>
      <Sidebar models={models} toggleModelVisibility={toggleModelVisibility} />
    </div>
  );
}

export default Scene;
