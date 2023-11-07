// Scene.jsx
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import Step1 from "./threejs/Step1";
import Step2 from "./threejs/Step2";
import Step3 from "./threejs/Step3";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import DescriptionDisplay from "./DescriptionDisplay";

function Scene() {
  const [models, setModels] = useState([
    { name: "Step 1", visible: true, description: "Description for Step 1." },
    { name: "Step 2", visible: true, description: "Description for Step 2." },
    { name: "Step 3", visible: true, description: "Description for Step 3." },
  ]);

  const [selectedModelDescription, setSelectedModelDescription] = useState("");

  const toggleModelVisibility = (index) => {
    const updatedModels = [...models];
    updatedModels[index].visible = !updatedModels[index].visible;
    if (!updatedModels[index].visible) {
      updatedModels[index].descriptionVisible = false;
      setSelectedModelDescription("");
    }
    setModels(updatedModels);
  };

  // const toggleDescriptionVisibility = (index) => {
  //   const updatedModels = [...models];
  //   updatedModels[index].descriptionVisible =
  //     !updatedModels[index].descriptionVisible;
  //   if (!updatedModels[index].descriptionVisible) {
  //     setSelectedModelDescription("");
  //   } else {
  //     setSelectedModelDescription(updatedModels[index].description);
  //   }
  //   setModels(updatedModels);
  // };

  const toggleDescriptionVisibility = (index) => {
    const updatedModels = models.map((model, i) => {
      if (i === index) {
        return {
          ...model,
          descriptionVisible: !model.descriptionVisible,
        };
      } else {
        return {
          ...model,
          descriptionVisible: false,
        };
      }
    });

    const selectedDescription = updatedModels[index].descriptionVisible
      ? updatedModels[index].description
      : "";

    setModels(updatedModels);
    setSelectedModelDescription(selectedDescription);
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
            {models[0].visible && (
              <Step1
                description={models[0].description}
                index={0}
                toggleDescriptionVisibility={toggleDescriptionVisibility}
              />
            )}
            {models[1].visible && (
              <Step2
                description={models[1].description}
                index={1}
                toggleDescriptionVisibility={toggleDescriptionVisibility}
              />
            )}
            {models[2].visible && (
              <Step3
                description={models[2].description}
                index={2}
                toggleDescriptionVisibility={toggleDescriptionVisibility}
              />
            )}
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
      <Sidebar
        models={models}
        toggleModelVisibility={toggleModelVisibility}
        toggleDescriptionVisibility={toggleDescriptionVisibility}
      />
      {selectedModelDescription && (
        <DescriptionDisplay description={selectedModelDescription} />
      )}
    </div>
  );
}

export default Scene;
