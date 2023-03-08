import { OrbitControls, PerspectiveCamera, Stats, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lights from "@/components/Lights";
import Ground from "@/components/Ground";
import Tree from "@/components/Tree";
import { useEffect, useState } from "react";
import Player from "@/components/Player";

export default function Home() {
useEffect(()=>{
  alert(`Controls: 
  W to move forward
  S to move backward
  A to move left
  D to move right`)
}, [])
  const testing = true;
  return (
    <>
    <div className="canvas-container">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[10,10,10]}/>
        {testing? <axesHelper args={[50]}/> : null}
        {/* {testing? <Stats /> : null} */}
        {testing? <gridHelper args={[10,10]}/> : null}
        <OrbitControls />
        <Tree  />
        <Player />
        <Lights />
       <Ground />
      </Canvas>
      </div>
    </>
  )
}

