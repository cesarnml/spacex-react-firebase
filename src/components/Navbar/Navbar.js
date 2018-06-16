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
      <i class='fas fa-bars nav__bars fa-2x' />
      <div className='rockets'>
        <div className='rocket-condensed'>ROCKETS &amp; SPACECRAFT</div>
        <Link className='rocket falcon9' to='/falcon9'>
          FALCON 9
        </Link>
        <Link className='rocket falcon-heavy' to='falcon-heavy'>
          FALCON HEAVY
        </Link>
        <Link className='rocket dragon' to='dragon'>
          DRAGON
        </Link>
        <Link className='updates' to='/updates'>
          UPDATES
        </Link>
      </div>
      <div className='company-info'>
        <div className='company-condensed'>COMPANY</div>
        <Link className='company about' to='/about'>
          ABOUT
        </Link>
        <Link className='company careers' to='/careers'>
          CAREERS
        </Link>
        <Link className='company gallery' to='/gallery'>
          GALLERY
        </Link>
        <Link className='shop' to='/shop'>
          SHOP
        </Link>
      </div>
    </div>
  )
}

export default Navbar
