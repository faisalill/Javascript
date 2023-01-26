import { useHelper } from "@react-three/drei";
import { useRef } from "react"
import { DirectionalLightHelper } from "three";

const Lights = ()=>{
    const lightRef = useRef();
    useHelper(lightRef,DirectionalLightHelper, 4, 'red')
    return (
        <>
        <directionalLight ref={lightRef} position={[0,10,10]} castShadow/>
        <ambientLight intensity={0.6} />
        <hemisphereLight args={['#7cdbe6','#5e9c49',0.4]}/>
        </>
    )
}
export default Lights