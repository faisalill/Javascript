import { OrbitControls, PerspectiveCamera, Stats, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatedBox } from "@/components/AnimtedBox";

const TexturedSphere = ()=>{
  const map = useTexture('./textures/metal_plate_diff_1k.png')
  const displacementMap = useTexture('./textures/metal_plate_disp_1k.png')
  const normalMap = useTexture('./textures/metal_plate_nor_gl_1k.png')
  const roughnessMap = useTexture('./textures/metal_plate_rough_1k.png')
  return(
    <>
    <mesh position={[0,0,0]}>
      <sphereGeometry />
      <meshStandardMaterial map={map}/>
    </mesh>
    <mesh position={[2,0,0]}>
      <sphereGeometry />
      <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap}/>
    </mesh>
    <mesh position={[-2,0,0]}>
      <sphereGeometry />
      <meshStandardMaterial map={map} />
    </mesh>
    </>
  )
}

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
        <directionalLight position={[0,5,5]}/>
        <ambientLight intensity={0.3} />
        <OrbitControls />
        {/* <AnimatedBox isTesting={testing}/> */}
        <TexturedSphere />
      </Canvas>
      </div>
    </>
  )
}
