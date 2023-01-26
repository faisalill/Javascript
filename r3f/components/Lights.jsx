import { useHelper } from "@react-three/drei";
import { useRef } from "react"
import { DirectionalLightHelper } from "three";

const Lights = ()=>{
    const lightRef = useRef();
    useHelper(lightRef,DirectionalLightHelper, 4, 'red')
    return (
        <>
        <directionalLight ref={lightRef} position={[0,20,20]}
        
        // scale={[5,5,5]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        
        />
        <ambientLight intensity={0.6} />
        <hemisphereLight args={['#7cdbe6','#5e9c49',0.4]}
         
        />
        </>
    )
}
export default Lights