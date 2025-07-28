// import React,{useState} from 'react'
// import "./App.css"

// const App = () => {
//   const [Number, setNumber] = useState(5)
//   const increment= ()=>{
//     setNumber((prev)=>prev+1)
//   }
//   const decrement= ()=>{
//     setNumber((prev)=>prev-1)
//   }
//   const [array,setArray]= useState([1,2,3,4,5,6,7,8,9])
//   const deleteItem = ()=>{
//     setArray(()=>{
//       return array.filter((elem,index)=>index!== array.length-1)
//     })
//   } 
//   return (
//     <div>
        
//       <button onClick={increment}>Increment+</button>
//       <h1>{Number}</h1>
//       <button onClick={decrement}>Decrement-</button>
//       <h1>{array}</h1>
//       {
//         array.map((elem,{index})=>{

//           return <li>{elem}</li>
//         })
        
//       }
//       <button onClick={()=>{
//         deleteItem()
//       }}>Delete last item</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Navbar from './components/Navbar'
import AddProduct from './pages/AddProduct'
import 'remixicon/fonts/remixicon.css'

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products/add' element={ <AddProduct/>}/>
      </Routes>
     
    </div>
  )
}

export default App





