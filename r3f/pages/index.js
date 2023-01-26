import { OrbitControls, PerspectiveCamera, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatedBox } from "@/components/AnimtedBox";



export default function Home() {
  const testing = true;
  return (
    <>
    <div className="canvas-container">
      <Canvas>
        <PerspectiveCamera makeDefault position={[10,10,10]}/>
        {testing? <axesHelper args={[5]}/> : null}
        {testing? <Stats /> : null}
        {testing? <gridHelper args={[10,10]}/> : null}
        <directionalLight />
        <ambientLight intensity={1} />
        <OrbitControls />
        <AnimatedBox isTesting={testing}/>
      </Canvas>
      </div>
    </>
  )
}
