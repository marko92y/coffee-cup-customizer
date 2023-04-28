import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls } from "@react-three/drei";
import { Cup } from "./Cup";

export const App = () => {
  return (
    <Canvas dpr={[1, 2]} eventSource={document.getElementById("root")}>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[0, 15, 10]}
        castShadow
      />
      <Environment preset="city" />
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 10, 0, 0]}
      >
        <Cup position={[0, 1, 0]} />
      </PresentationControls>
    </Canvas>
  );
};
