import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

// this is the shopping cart navigation thats connected to the main navbar
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
              <Link to="/">Shop</Link>
              <Link to="/cart">🛒</Link>
            </div>
        </div>
      );
}
