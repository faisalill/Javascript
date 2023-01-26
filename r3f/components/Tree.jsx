import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Tree = ({boundary, count}) =>{
    const model = useLoader(GLTFLoader,'./models/Tree.glb')
    const treeRef = useRef()
   model.scene.traverse((object)=>{
    if(object.isMesh){
      object.castShadow = true;
    }
   })
   useFrame(()=>{
    treeRef.current.rotation.y +=0.004
   })
 
    return (
    <group position={[10,0,0]} >
     <object3D ref={treeRef}>
    <primitive object={model.scene.clone()} />
    </object3D>
    </group>
    )
  }
  
export default Tree;