import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffectHook = () => {

    const productAPI = "https://picsum.photos/v2/list?page=1&limit=5"

    useEffect(()=>{
        fetch(productAPI).then((res)=> res.json()).then((data)=>console.log(data))
    },[])


    // First is the side effect
    // second is the clean-up
    // third is the comma seperated dependencies


    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         console.log("setinterval started")
    //         setCount(prev => prev +1)
    //     },1000)

    //     return ()=>{
    //         console.log("setInterval stop")
    //         clearInterval(timer)
    //     }
        
    // },[])


    const [count,setCount] = useState(0)

    // it will run on every render
    // useEffect(()=>{
    //     alert("HI Devesh")
    // })


    // it will run only the first render 
    // useEffect(()=>{
    //     alert("HI Devesh")
    // },[])

    // it will run when value of count is changed
    // useEffect(()=>{
    //     alert("HI Devesh")
    // },[count])
    

    const handleClick=()=>{
        setCount(prev => prev+1)
    }
    

  return (
    <div>
        <p>useEffect hook generates the side effect</p>
        <p>Example like :- let our application runs and after first re-render i want to call the api  so here api call be the side effect</p>
        <p>Example 2:  when dom content load make the connection between Database so making connection is the side effect</p>
        <p>Example 3: - like timeout , time interval</p>
        <p>Count Value is :- {count}</p>
        <button onClick={handleClick}>click me </button>
    </div>
  )
}

export default UseEffectHook