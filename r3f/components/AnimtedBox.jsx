import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


export  const AnimatedBox = () =>{
   const meshRef = useRef(null)
   useFrame(()=>{
    if(meshRef.current){
      meshRef.current.rotation.x += 0.01
    }
   });

  return (<mesh ref={meshRef}>
  <boxGeometry args={[1,1,1]} />
  <meshStandardMaterial color='hotpink' />
  </mesh>)
}