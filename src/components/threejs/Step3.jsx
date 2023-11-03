import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function Step3() {
  const gltf = useLoader(GLTFLoader, "/models/Step3.glb");

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <primitive object={gltf.scene} dispose={null} scale={40} />
    </group>
  );
}

export default Step3;
