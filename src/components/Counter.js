import { useEffect, useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(count)
    },[count])
    return (
        <>
        <div>{count}</div>
        <button onClick={()=>setCount((count)=>count+1)}>Increment Counter +</button>
        <button onClick={()=>{
            if(count==0)
            return;
            setCount((count)=>count-1)
        }}>Decrement Counter -</button>
        </>
    )
}