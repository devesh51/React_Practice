import React from 'react'
import {useCallback,useState} from "react"
import ParentCallback from './ParentCallback';

const funccount = new Set();

const HookUseCallback = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    
  
      const incrementCounter = useCallback(() => {
        // console.log("increment function called")
          setCount(count + 1);
      }, [count]);
      
    //   const incrementCounter = () => {
    //     console.log("increment function called")
    //     setCount(count + 1);
    // }
  
      const decrementCounter = useCallback(() => {
          // console.log("decrement function called")
          setCount(count - 1);
      }, [count]);
  
    //   const decrementCounter = () => {
    //     console.log("decrement function called")
    //     setCount(count - 1);
    // }
  
      const incrementNumber = useCallback(() => {
          // console.log("number function called")
          setNumber(number + 1);
      }, [number]);
  
    //   const incrementNumber = () => {
    //     console.log("number function called")
    //     setNumber(number + 1);
    // }
  
      funccount.add(incrementCounter);
      funccount.add(decrementCounter);
      funccount.add(incrementNumber);
  
      // console.log(funccount)
  
  
    return (
      <>
        <div>
        <p>---------------------------Example 1 UseCallback-------------------------</p>
        <p >
         <b>How to use Callback Hook</b>
        </p>
        <p>React useCallback hook returns a memoized function to reduce unnecessary callbacks. This useCallback hook is used when you have a component in which the child is rerendering again and again without need.</p>
        <p>Count: {count}</p>
              <p>Function Count: {funccount.size}</p>
              <button onClick={incrementCounter}>
                  Increase counter
              </button>
              <button onClick={decrementCounter}>
                  Decrease Counter
              </button>
              <button onClick={incrementNumber}>
                  Increase number
              </button>
        </div>
        <p>---------------------------Example 2 UseCallback-------------------------</p>
        <ParentCallback/>
      </>
    )
  }


export default HookUseCallback