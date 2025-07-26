// import React, { useState } from 'react'
// import "./App.css"
// const App = () => {
//   const [number, setNumber] = useState(5)
//   const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
//   const decrement = () => {
//     setNumber((prev) => prev - 1)
//   }
//   const deleteItem = () => {
//     setArray(() => {
//       return array.filter((elem,index) => index !== array.length-1)
//     })
//   }
//   return (
//     <div>
//       <h1>Welcome to the E-commerce App</h1>
//       <p>This is a simple React application for e-commerce.</p>
//       <p>Explore our products and enjoy shopping!</p>
//       <h1>{number}</h1>
//       <h4>{array}</h4>
//       <ul>
//         {
//           array.map((elem, index) => {
//             return <li>{elem}</li>
//           })
//         }
//       </ul>
//       <button onClick={deleteItem}>Delete List Item</button>
//       <button onClick={() => setNumber(number + 1)}>Increment</button>
//       <button onClick={() => decrement()}>Decrement</button> {/* <button onClick={decrement}>Decrement</button> */}
//     </div>

//   )
// }

// export default App


import React from 'react'
import NavBar  from './components/NavBar'
import 'remixicon/fonts/remixicon.css'
import Login from './components/login/login'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Login/>
    </div>
  )
}

export default App
