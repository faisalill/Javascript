import { OrbitControls, PerspectiveCamera, Stats, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatedBox } from "@/components/AnimtedBox";
import Lights from "@/components/Lights";
import Ground from "@/components/Ground";

const TexturedSphere = ()=>{
  const map = useTexture('./textures/metal_plate_diff_1k.png')
  const normalMap = useTexture('./textures/metal_plate_nor_gl_1k.png')
  const roughnessMap = useTexture('./textures/metal_plate_rough_1k.png')
  return(
    <>
    <mesh scale={[0.5,0.5,0.5]} position={[0,1,0]} castShadow>
      <sphereGeometry />
      <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
    </mesh>
    </>
  )
}

export default function Home() {
  const testing = true;
  return (
    <>
    <div className="canvas-container">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[10,10,10]}/>
        {testing? <axesHelper args={[5]}/> : null}
        {testing? <Stats /> : null}
        {testing? <gridHelper args={[10,10]}/> : null}
        <OrbitControls />
        {/* <AnimatedBox isTesting={testing}/> */}
        <TexturedSphere />
        <Lights />
       <Ground />
      </Canvas>
      </div>
    </>
  )
}
