import React, { useState } from 'react'
import ChildA from './ChildA'
import { createContext } from 'react' 


const userContext = createContext()
// console.log(userContext) it gives Provider and Consumer function

const Parent = () => {

    const [user,setUser] = useState("devesh")

  return (
    <userContext.Provider value={{user}}>
        <p>step 1 fisrt create context through createContext() function </p>
        <p>setp 2 second wrap parent of through createdContext name . provider and pass a value like value={user}</p>
        <p>step 3 for accessing the value in the child component thorugh useContext()</p>
        <div><ChildA/></div>
    </userContext.Provider>
    
  )
}

export default Parent
export {userContext}