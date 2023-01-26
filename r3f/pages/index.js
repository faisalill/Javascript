import { OrbitControls, PerspectiveCamera, Stats, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "@/components/Lights";
import Ground from "@/components/Ground";
import Tree from "@/components/Tree";
import Player from "@/components/Player";
import { useEffect, useState } from "react";



export default function Home() {
  const [Action, setAction] = useState('idle')
  // useEffect(()=>{
  //   document.addEventListener('keydown',(e)=>{
  //     if(e.key === 'w'){
  //       console.log("presesed")
  //     }
  //   })
  // },[])
  const testing = true;
  return (
    <>
    <div className="canvas-container">
      <button onClick={()=>{setAction('runForward')}}>runForward</button>
      <button onClick={()=>{setAction('idle')}}>idle</button>
      <button onClick={()=>{setAction("runBackward")}}>runBackward</button>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[10,10,10]}/>
        {testing? <axesHelper args={[50]}/> : null}
        {/* {testing? <Stats /> : null} */}
        {testing? <gridHelper args={[10,10]}/> : null}
        <OrbitControls />
        <Tree  />
        <Player action={Action}/>
        <Lights />
       <Ground />
      </Canvas>
      </div>
    </>
  )
}

