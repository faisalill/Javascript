import React from 'react'
import {Canvas} from '@react-three/fiber';
import { Suspense } from 'react';
import { useState } from 'react';
import {PerspectiveCamera} from '@react-three/drei'
const App = () => {
  
  return (
    <>
    <Canvas id='three-canvas-container'>
     <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0,-1,15]}/>
        <mesh position={[0,0.5,0]}>
          <sphereGeometry args={[0.5,32,32]}/>
          <meshStandardMaterial color='hotpink'/>
        </mesh>
        <mesh rotation={[1.57,0,0]}>
          <planeGeometry args={[6,6]}/>
          <meshStandardMaterial color='black'/>
        </mesh>
        <ambientLight args={['white',1]} />
     </Suspense>
    </Canvas>
    </>
  )
}

export default App