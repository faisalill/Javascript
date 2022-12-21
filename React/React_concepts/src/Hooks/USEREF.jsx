import React,{useEffect, useRef} from 'react'

const USEREF = () => {
  const Counter = useRef(0)
  const elementRef = useRef()
  useEffect(()=>{
    console.log("Mounted")
  },)
  return (
    <div>
      <div className="container">
        <div className="title">useRef</div>
        <div>{Counter.current}</div>
        <button onClick={()=>{Counter.current += 1; console.log("current value", Counter.current)}}>Change Counter</button>
      {/* Use Ref changes the value but does not cause a 
      rerender  */}
      {/* We can also use useRef to get a dom element like */}
      <p ref={elementRef}>Hello</p>
      {/* The dom element is in the current value */}
      <button onClick={()=>{console.log(elementRef.current)}}>Log dom element</button>
      </div>
    </div>
  )
}

export default USEREF
