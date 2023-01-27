import { useInput } from "./useInput"

const { useGLTF, useAnimations } = require("@react-three/drei")
const { useEffect, useRef } = require("react")

const Player = ()=>{
  const model = useGLTF('./models/myPlayer.glb')
  const {actions} = useAnimations(model.animations,model.scene)
   const {forward,backward,left,right,shift,jump} = useInput()
  model.scene.traverse((object)=>{
    if(object.isMesh){
      object.castShadow = true
    }
  })
 
  const currentAction = useRef('')

  useEffect(()=>{
    let action = 'idle'
    if(forward || backward || left || right){
      action='walking'
      if(shift){
        action='running'
      }
    }
    else if(jump){
      action='jumping'
    }

    if(currentAction.current != action){
      const nextAction = actions[action]
      const current = actions[currentAction.current]
      current?.fadeOut(0.2)
      nextAction?.reset().fadeIn(0.2).play()
      currentAction.current = action;
    }

  },[forward,backward,left,right,shift,jump])

  return(
      <object3D>
      <primitive object={model.scene}/>
      </object3D>
  )
}
export default Player;