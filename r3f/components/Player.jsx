import { useFrame, useThree } from "@react-three/fiber"
import { useInput } from "./useInput"
const { useGLTF, useAnimations, OrbitControls } = require("@react-three/drei")
const { useEffect, useRef } = require("react")
import * as THREE from 'three'

let walkDirection = new THREE.Vector3()
let rotatAngle = new THREE.Vector3(0,1,0)
let rotateQuarternion = new THREE.Quaternion()
let cameraTarget = new THREE.Vector3()


const directionOffset = ({forward,backward,left,right})=>{
  var directionOffset = 0; 
  if(forward){
    if(left){
      directionOffset= Math.PI/4
    }
    else if(right){
      directionOffset= -Math.PI/4
    }
  }
    else if(backward){
      if(left){
        directionOffset= Math.PI/4 + Math.PI/2
      }
      else if(right){
        directionOffset= Math.PI/4 - Math.PI/2
      }
      else{
        directionOffset = Math.PI
      }
    }
    else if(left){
      directionOffset= Math.PI/2
    }
    else if(right){
      directionOffset= -Math.PI/2
    }
   return directionOffset
}


const Player = ()=>{
  const model = useGLTF('./models/player.glb')
  const {actions} = useAnimations(model.animations,model.scene)
   const {forward,backward,left,right,shift,jump} = useInput()
  model.scene.traverse((object)=>{
    if(object.isMesh){
      object.castShadow = true
    }
  })
 
  const currentAction = useRef('')
  const controlsRef = useRef()
  const camera = useThree((state)=> state.camera)
  
  const updateCameraTarget = (moveX,moveZ)=>{
    camera.position.x += moveX;
    camera.position.z +=moveZ
    
    //update camera target
    cameraTarget.x = model.scene.position.x;
    cameraTarget.y = model.scene.position.y + 2;
    cameraTarget.z = model.scene.position.z;
    if(controlsRef.current){
      controlsRef.current.target = cameraTarget
    }
  }



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

   useFrame((state,delta)=>{
    if(currentAction.current === 'walking' || currentAction.current === 'running'){
      //calculate camera direction
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      )

      //diagonal movement offset
      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right
      })

      //rotate model
      rotateQuarternion.setFromAxisAngle(
        rotatAngle,angleYCameraDirection + newDirectionOffset
      )
      model.scene.quaternion.rotateTowards(rotateQuarternion,0.2)

      //calculate walk direction
      camera.getWorldDirection(walkDirection)
      walkDirection.y = 0
      walkDirection.normalize()
      walkDirection.applyAxisAngle(rotatAngle,newDirectionOffset)

      //run/walk velocity
      const velocity = currentAction.current ==='running' ? 7:3

      //move model and camera
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta
      model.scene.position.x += moveX
      model.scene.position.z += moveZ
      updateCameraTarget(moveX,moveZ)
    }
   })

  return(
    <>
      <OrbitControls ref={controlsRef}/>
      <primitive object={model.scene}/>
    </>
  )
}
export default Player;