import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatedBox } from "@/components/AnimtedBox";
export default function Home() {
  return (
    <>
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={1}/>
        <OrbitControls />
        <AnimatedBox />
      </Canvas>
      </div>
    </>
  )
}
