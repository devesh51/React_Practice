import React from 'react'
import {useContext} from 'react'
import { userContext } from './Parent'


const ChildB = () => {

    const {user} = useContext(userContext)
    console.log(user)
  return (
    <div>Childb
        <p>UserName is :- {user}</p>
    </div>
  )
}

export default ChildB