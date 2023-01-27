const { useGLTF, useAnimations } = require("@react-three/drei")
const { useEffect } = require("react")

const Player = ()=>{
  const model = useGLTF('./models/myPlayer.glb')
  const {actions} = useAnimations(model.animations,model.scene)

  useEffect(()=>{
    // actions?.idle?.play()
    console.log(model)
    actions?.idle?.play()
  },[])

  return(
    
      <primitive object={model.scene}/>
    
  )
}
export default Player;