import React, { forwardRef, useRef, useState } from 'react'

const UseRefHook = () => {

    const inputRef = useRef()
    const [count, setCount] = useState(0);
    let timeRef = useRef('')

    const onStartClick = () => {
        timeRef.current = setInterval(() => {
            setCount(count => count + 1) //batch update - to get the last updated value else if we use simple count+1 then it will take the count value as 0 each time and will just show the updated value on refreshing the page 
        }, 1000)
    }
    const onStopClick = () => {
        clearInterval(timeRef.current)
    }

    const onFocusClick = () => {
        inputRef.current.focus()
    }

    const MyButton = forwardRef(
        (props,ref) => {
            return <input placeholder={props.placeholder} ref={ref}></input>
        }
    )

    return (
        <div>
            <p>count - {count}</p>
            <button onClick={onStartClick}>Start</button>
            <button onClick={onStopClick}>Stop</button>
            <hr></hr>
            {/* MANIPULATING THE DOM USING USEREF */}
            <input ref={inputRef} placeholder="Type Something..."></input>
            <button onClick={onFocusClick}>Focus On Input</button>
            <hr></hr>
            {/* Exposing Ref using React.forwardRef() */}
            <MyButton placeholder="Type..." ref={inputRef} />
            <button onClick={onFocusClick}>Focus On Input - Exposing Ref</button>
        </div>
    )
}

export default UseRefHook
