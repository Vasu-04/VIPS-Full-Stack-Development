import React from 'react'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <div className="left">
                <h2>Shopy</h2>
            </div>
            <div className='search'>
                <input type='text'/>
            </div>
            <div className="right">
                <i class="ri-shopping-cart-line"></i>
            </div>
        </nav>
    )
}

export default NavBar
