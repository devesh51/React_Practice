import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback'

const ParentCallback = () => {

  const [count,setCount] = useState(0)


  const handleClick = useCallback(()=>{
    setCount((prev)=> prev+1)
  },[])
  // in [] dpendency if we pass count so it means that when the count is change pls re created the fuction refernece other wise it will be freeze in [] empty dependcy
  // with the help of useCallback the function is freeze or memoize 

  // const handleClick = ()=>{
  //   setCount((prev)=> prev+1)
  // }

  // when component is re-render the handleClick function refrence change, and every time re-rendering the function refernce is re-created(different refernce from the previous one)

  return (
    <div>
      <b>Example of parent child concept of useCallback</b>
      <p>Value of Count :- {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <p>parent has child coomponent in it and we passing the function in it</p>

      <ChildCallback handleClick={handleClick}/>
      {/* when we pass the handleClick function */}

      {/* <ChildCallback buttonName="click me"/> */}
      {/* here we pass the buttonName as a single variable*/}
    </div>
  )
}

export default ParentCallback