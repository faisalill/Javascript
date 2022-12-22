import React from 'react'
import { useCounter } from './useCounter'
const CustomHooks = () => {
    const [Counter, add, sub, reset] = useCounter(0)
  return (
    <div className="container">
        <div className="title">Custom Counter hook</div>
        <div>{Counter}</div>
        <button onClick={add}>Increment</button>
        <button onClick={sub}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHooks