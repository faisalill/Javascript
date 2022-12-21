import React, {useEffect} from 'react'
import { useState } from 'react'

const USEEFFECT = () => {
    const [Counter, setCounter] = useState(0)
    useEffect(() => {
        // This code executes atleast once(Mounting) and more depending on the 
        //dependency array 
      console.log('Counter Mounted')
      return ()=>{
        // This code runs only when the old state is 
        // demounted 
        console.log("Old State of counter is demounted")
      }
    },[Counter]
    // This array contains the variables which trigger this useeffect
    // time their state changes
    // If empty then useeffect runs at least once (Mounting)
    // If no array defined then it runs as many times as the
    // render is performed
    )
    
  return (
    <div className='container'>
    <div className="title">Use Effect</div>   
    <div>Counter: {Counter}</div> 
    <button onClick={()=>{setCounter((value)=>value+1)}}>Change Counter </button>
    </div>
  )
}

export default USEEFFECT
