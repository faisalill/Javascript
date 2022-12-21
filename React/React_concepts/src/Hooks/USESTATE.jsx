import React from 'react'
import { useState } from 'react'

const USESTATE = () => {
    const [RandomLog, setRandomLog] = useState(()=> console.log("hello world"))
    const [Counter, setCounter] = useState(0)
    return (
    //lazy loading or not render
    <>
    <div className='container'>
    <div className='title'>UseState</div> 
    <div>Counter: {Counter}</div>
    <button onClick={()=>{setCounter(Counter+1)}}>Trigger Log</button>
    {/* 
    const [RandomLog, setRandomLog] = useState(console.log('randomlog'))
     This Type of trigger causes the RandomLog to rerender and log 'random log'
      to the console for the number of times it is clicked
     */}
    {/* SO instead of that we use a function in the value of
    useState(function) so it does not cause to rerender or 
    fetch an api a lot of times everytime that thing is rerendered */}
    {/* So we use the one defined above so when the 
    state of the counter changes it does not trigger the 
    rerender of the RandomLog state  */}
    </div>
    </>
  )
}

export default USESTATE
