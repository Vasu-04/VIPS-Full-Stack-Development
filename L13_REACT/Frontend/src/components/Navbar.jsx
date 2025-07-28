import React from 'react'
import "./Navbar.css"
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>

      <div className='left'>
        <h2>Shopy</h2>
      </div>
      <div>
        <input type="text" />
      </div>
      <div className="right">
        <Link to="/products/add"> Add new Product</Link>
        <i className="ri-shopping-cart-2-fill"></i>
      </div>
    </nav>
  )
}

export default Navbar