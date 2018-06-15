import React from 'react'
import logo from '../assets/logo.png'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img className='logo' src={logo} alt='spacex logo' />
      <div className='rockets'>
        <div className='falcon9'>FALCON 9</div>
        <div className='falconH'>FALCON HEAVY</div>
        <div className='dragon'>DRAGON</div>
      </div>
      <div className='news'>NEWS</div>
      <div className='company'>
        <div className='about'>ABOUT SPACEX</div>
        <div className='careers'>CAREERS</div>
        <div className='gallery'>GALLERY</div>
      </div>
      <div className='shop'>SHOP</div>
    </div>
  )
}

export default Navbar
