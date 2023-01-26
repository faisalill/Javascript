import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
const Tree = () =>{
    const model = useLoader(GLTFLoader,'./models/Tree.glb')
   model.scene.traverse((object)=>{
    if(object.isMesh){
      object.castShadow = true;
    }
   })
    return (<primitive object={model.scene} />)
  }
  
export default Tree;