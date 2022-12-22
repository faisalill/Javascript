import { useState } from "react";

export function useCounter(param){
    // param is the value given to the hook
const [Counter, setCounter] = useState(param)
const add = ()=>setCounter((val)=>val+1)
const sub = ()=>setCounter((val)=>val-1)
const reset = ()=>setCounter((val)=>0)
// The left side of the hook
return [Counter, add, sub,reset];
}