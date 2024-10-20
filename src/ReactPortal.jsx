import React,{useEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import Modal from './Modal'

const ReactPortal = ({ModalValue}) => {
    const [isModal, setIsmodal] = useState(false)

    const handleModal =()=>{
        setIsmodal(prevState => !prevState)
       
    }
    useEffect(()=>{
        ModalValue(isModal)
    },[isModal])
    
  return createPortal(
    <>
    <button onClick={handleModal}> {isModal?"CloseModal":"OpenModal"}</button>
    {isModal?<Modal/>:""}
    </>,
    document.getElementById('Modal')
  )
}

export default ReactPortal