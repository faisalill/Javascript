import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BoxHelper } from "three";


export  const AnimatedBox = ({isTesting}) =>{
   const meshRef = useRef(null)
   useFrame(()=>{
    if(meshRef.current){
      meshRef.current.rotation.y += 0.009
      meshRef.current.rotation.x -= 0.009
    }
   });
   {isTesting? useHelper(meshRef,BoxHelper,'blue'):null}

  return (<mesh ref={meshRef}>
  <boxGeometry args={[1,1,1]} />
  <meshStandardMaterial color='hotpink' />
  </mesh>)
}