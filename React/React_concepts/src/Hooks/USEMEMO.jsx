import React, {useMemo, useEffect, useState} from 'react'

const USEMEMO = () => {
    const x = {"another object": "world"}
    const [Counter, setCounter] = useState(0)
    const memo = useMemo(()=>{
        return {"random object": "hello"}
    },[])
    useEffect(() => {
      console.log('memo mounted')
    
      return () => {
        console.log('memo demounted')
      }
    }, [memo])
    useEffect(() => {
        console.log('x mounted')
      
        return () => {
          console.log('x demounted')
        }
      }, [x])
    
  return (
    <>
    <div className="container">
        <div className="title">UseMemo</div>
        {/* useMemo does not rerender objects and other values
        and u pretty much assign value by using the return function
        method. */}
        <div>{Counter}</div>
       <button onClick={()=>{setCounter((value)=>value+1)}}>Increment</button>
       {/* When the state is changed and the component is rerendered
       we don't see logs from memo object since it remains the same
       and helps to reduce computational power since it does not cause
       the rerender when a simple state is changed unlike the 
       x object which renders again i.e. gets mounted and demounted
       with every state render */}
    </div>
    
    
    </>
  )
}

export default USEMEMO
