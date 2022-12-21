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
    {/* And when we pass a function to useState it sets the 
    current state to the return value of the function. 
    The setState((value)=>return ...) here setSTate provides
    the value of previous state as a parameter automatically and 
    using this functional method to update state is better since 
    it does not cause unusual rerender and avoids the problem occuring 
    in the below provided example */}
    <button onClick={
        ()=>{
            setCounter(Counter+1)
            setTimeout(()=>{setCounter(Counter + 1)},300)
            setTimeout(()=>{setCounter(Counter + 1)},300)
            setTimeout(()=>{setCounter(Counter + 1)},300)
        }
    }>Usual update</button>
    {/* on clicking the above button the counter remains
    the same since the same value of counter is passed 
    lets try it with functional state update */}
    <button onClick={
        ()=>{
            setCounter((counter)=>counter+1)
            setTimeout(()=>{setCounter((counter)=>counter+1)},300)
            setTimeout(()=>{setCounter((counter)=>counter+1)},300)
            setTimeout(()=>{setCounter((counter)=>counter+1)},300)
        }
    }>Functional update</button>
    {/* Using this functional update the value updates 4 four
    times like it should because instead of passing the same 
    flushed out state value it passes the current state
    through the function parametere and changes the value */}
    </div>
    </>
  )
}

export default USESTATE
