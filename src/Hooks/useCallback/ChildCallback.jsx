import React from 'react'


const ChildCallback = React.memo((props) => {
    console.log("child component re-rendring")
    console.log(props)   // {handleClick : f}
  return (
    <div>

        <p>child component</p>
        <p>Prop name is {props.buttonName} </p>
        
    </div>
  )
})

// if not use it without React.memo() so the child component is render again and again
// after using React.memo() the child component is not render again and again because it react.memo() cache the buttonName reference 
// and every time same refernce is come so it cache it so the only one time it render

// it can re-render when props change otherwise it didn't re-render
// props change means buttonName = "click me2"

// ----------------- second scenerio ----------------

// if we pass function as prop in that case react.memo() failed
// if we pass as handleClick = {handleClick} child component re-render again and again because every time refernce of handleClick function is different
// it looks likes doing same thing but the function rfrence different

export default ChildCallback