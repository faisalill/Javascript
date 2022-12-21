import React, {useReducer} from 'react'
const reducer = (state, action)=>{
 switch(action.type){
    case "increment1": 
    return {
        ...state,
        counter1: state.counter1 + 1
    }
    case "increment2": 
    return {
        ...state,
        counter2: state.counter2 + 1
    }
    case "decrement1": 
    return {
        ...state,
        counter1: state.counter1 - 1
    }
    case "decrement2": 
    return {
        ...state,
        counter2: state.counter2 - 1
    }   
 }
}
const USEREDUCER = () => {
  const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0})
    return (
    <div className="container">
        <div className="title">useReducer</div>
        <div>counter1: {state.counter1}</div>
        <button onClick={()=>{dispatch({type: "increment1"})}}>increment counter 1</button>
        <button onClick={()=>{dispatch({type: "decrement1"})}}>decrement counter1</button>
        <div>Counter2:{state.counter2}</div>
        <button onClick={()=>{dispatch({type: "increment2"})}}>Increment Counter 2</button>
        <button onClick={()=>{dispatch({type: "decrement2"})}}>Decrement Counter 2</button>
    {/* Usereducer helps to manage multiple states without loosing
    them and keeps the code cleaner by utilising the dispatch function
     */}
    </div>
  )
}

export default USEREDUCER
