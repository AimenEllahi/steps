import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Birds() {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  const gltf = useLoader(GLTFLoader, "/models/bird.glb", (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  return (
    <group
      position={[0, 15.999999999999972, 25.30000000000003]}
      rotation={[0, 5, 0]}
    >
      <primitive object={gltf.scene} dispose={null} scale={0.1} />
    </group>
  );
}

export default Birds;
