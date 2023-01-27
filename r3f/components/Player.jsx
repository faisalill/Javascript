import { useInput } from "./useInput"

const { useGLTF, useAnimations } = require("@react-three/drei")
const { useEffect } = require("react")

const Player = ()=>{
  const model = useGLTF('./models/myPlayer.glb')
  const {actions} = useAnimations(model.animations,model.scene)
   const {forward,backward,left,right,shift,jump} = useInput()
  model.scene.traverse((object)=>{
    if(object.isMesh){
      object.castShadow = true
    }
  })

  useEffect(()=>{
    console.log("forward",forward)
    console.log("backward",backward)
    console.log("left",left)
    console.log("right",right)
    console.log("shift",shift)
    console.log("jump",jump)
  },[forward,backward,left,right,shift,jump])

  return(
      <object3D>
      <primitive object={model.scene}/>
      </object3D>
  )
}
export default Player;