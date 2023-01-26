
const Ground = () => {
  return (
    <>
     <mesh rotation-x={Math.PI*-0.5} receiveShadow>
          <planeGeometry args={[5,5]}/>
          <meshStandardMaterial color='hotpink'/>
        </mesh>
    </>
  )
}

export default Ground