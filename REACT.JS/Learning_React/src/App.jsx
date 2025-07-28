import React from 'react'
import UseStateHook from './UseStateHook'
import UseRefHook from './UseRefHook'
import './App.css'
const App = () => {
  return (
    <>
    <h1 className='heading'>USESTATE</h1>
    <UseStateHook/>
    <h1 className='heading'>USEREF</h1>
    <UseRefHook/>
    </>
  )
}

export default App
