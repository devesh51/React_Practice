import React, { useEffect, useState } from 'react'
import HookUseMemo from './Hooks/useMemo/HookUseMemo'
import HookUseCallback from './Hooks/useCallback/HookUseCallback'
import Parent from './Hooks/useContext/Parent'
import UseEffectHook from './Hooks/useEffect/UseEffectHook'
import DangerouslySetInnerHtml from './DangerouslySetInnerHtml'
import ReactPortal from './ReactPortal'
import { Outlet,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import "./App.css"
import Navbar from './Header/Navbar/Navbar'
import { Increment } from './store/ReadSlice'

const App = () => {

  const [isModalView, setIsModalView] = useState(null)

  const StoreValueCount = useSelector((store)=>store.count)

  const dispatch = useDispatch()


  const ModalValue = (value)=>{
    setIsModalView(value)
  }

  const StoreCountHandle =()=>{
    dispatch(Increment(StoreValueCount+1))
  }

  // useEffect(()=>{
    
  // },[StoreValueCount])


  return (
    <div className={isModalView?"App-Overlay":"App"}>
      <HookUseMemo/>
      <HookUseCallback/>
      <p>-------------useContext API ------------</p>
      <Parent/>

      <p>------------useEffect Hook---------------</p>
      <UseEffectHook/>
      <DangerouslySetInnerHtml/>
      <p>-------------ReactPortal-----------------</p>
      <ReactPortal ModalValue={ModalValue}/>
      <div>With the help of portals, developers can render a component’s content at a different DOM node, even outside the root DOM element of the application</div>
      <p>The primary motivation behind portals is to facilitate the creation of UI overlays, modal dialogs, tooltips</p>  

      <p>--------------------Browser Router---------------------</p>
      <Navbar/>
      <Outlet/>
      <p>-------------Reading the value of count from the store-------------</p>

      <span>
        <p>Count value is : {StoreValueCount}</p>
        </span>

      <button onClick={StoreCountHandle} >StoreCountChangeButton</button>
    </div>  
  )
}

export default App