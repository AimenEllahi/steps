// Scene.jsx
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import Step1 from "./threejs/Step1";
import Step2 from "./threejs/Step2";
import Step3 from "./threejs/Step3";
import Sidebar from "./Sidebar";
import Loader from "./Loader";
import DescriptionDisplay from "./DescriptionDisplay";

const Annontations = [
  {
    id: 1,
    name: "Annontation 1",
    for: "Step 1",
    description: "Description for Step 1.",
    visible: true,
  },
  {
    id: 2,
    name: "Annontation 2",
    for: "Step 2",
    description: "Description for Step 2.",
    visible: true,
  },
  {
    id: 3,
    name: "Annontation 3",
    for: "Step 3",
    description: "Description for Step 3.",
    visible: true,
  },
  {
    id: 4,
    name: "Annontation 4",
    for: "Step 1",
    description: "Description for Step 4.",
    visible: true,
  },
];

function Scene() {
  const [models, setModels] = useState([
    {
      name: "Step 1",
      visible: true,
    },
    {
      name: "Step 2",
      visible: true,
    },
    {
      name: "Step 3",
      visible: true,
    },
  ]);

  const [annontations, setAnnontations] = useState(Annontations);

  const [annontation, setAnnontation] = useState();

  const toggleModelVisibility = (index) => {
    const updatedModels = [...models];
    updatedModels[index].visible = !updatedModels[index].visible;

    setModels(updatedModels);
  };

  const toggleDescriptionVisibility = (id, value) => {
    let updatedAnnontations = [...annontations];
    //find model with id
    const index = updatedAnnontations.findIndex((x) => x.id === id);
    updatedAnnontations[index].visible = value;

    setAnnontations([...updatedAnnontations]);
  };

  return (
    <div className='w-screen h-screen flex flex-col lg:flex-row'>
      <div className='lg:w-4/5 w-full lg:h-[100vh] h-[70vh]'>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 5, 10], fov: 50 }}>
          <fog attach='fog' args={["#fff", 0, 110]} />
          <Environment preset='sunset' />
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
          <OrbitControls />
          <Suspense fallback={<Loader />}>
            {models[0].visible && (
              <Step1
                annontation1={annontations.filter((x) => x.id === 1)[0].visible}
                annontation4={annontations.filter((x) => x.id === 4)[0].visible}
                setAnnontation={setAnnontation}
              />
            )}
            {models[1].visible && (
              <Step2
                annontation2={annontations.filter((x) => x.id === 2)[0].visible}
                setAnnontation={setAnnontation}
              />
            )}
            {models[2].visible && (
              <Step3
                annontation3={annontations.filter((x) => x.id === 3)[0].visible}
                setAnnontation={setAnnontation}
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
      <div>
        <Sidebar
          models={models}
          annontations={annontations}
          toggleModelVisibility={toggleModelVisibility}
          toggleDescriptionVisibility={toggleDescriptionVisibility}
        />
        {annontation && (
          <DescriptionDisplay
            onClose={() => setAnnontation(null)}
            description={annontations[annontation - 1].description}
          />
        )}
      </div>
    </div>
  );
}

export default Scene;
