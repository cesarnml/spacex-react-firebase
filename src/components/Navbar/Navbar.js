import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to='/'>
        <img className='logo' src={logo} alt='spacex logo' />
      </Link>
      <div className='rockets'>
        <Link className='rocket falcon9' to='/falcon9'>
          FALCON 9
        </Link>
        <Link className='rocket falcon-heavy' to='falcon-heavy'>
          FALCON HEAVY
        </Link>
        <Link className='rocket dragon' to='dragon'>
          DRAGON
        </Link>
      </div>
      <Link className='news' to='/news'>
        NEWS
      </Link>
      <div className='company-info'>
        <Link className='company about' to='/about'>
          ABOUT SPACEX
        </Link>
        <Link className='company careers' to='/careers'>
          CAREERS
        </Link>
        <Link className='company gallery' to='/gallery'>
          GALLERY
        </Link>
      </div>
      <Link className='shop' to='/shop'>
        SHOP
      </Link>
    </div>
  )
}

export default Navbar
