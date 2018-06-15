import React from 'react'
import navBrand from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark sticky-top'>
      <nav className='nav d-flex'>
        <div className='nav-list d-flex'>
          <Link to='/'>
            <img className='nav-brand' src={navBrand} alt='spacex_brand' />
          </Link>

          <div className='nav-item-rockets'>
            <Link className='nav-link-rockets' to='/falcon9'>
              FALCON 9
            </Link>
          </div>
          <div className='nav-item-rockets'>
            <Link className='nav-link-rockets' to='/falcon-heavy'>
              FALCON HEAVY
            </Link>
          </div>
          <div className='nav-item-rockets'>
            <Link className='nav-link-rockets' to='/dragon'>
              DRAGON
            </Link>
          </div>
          <div className='nav-item-rockets'>
            <Link className='nav-link-rockets' to='/updates'>
              UPDATES
            </Link>
          </div>
        </div>

        <div className='nav-list d-flex'>
          <div className='nav-item-company'>
            <Link className='nav-link-company' to='/about'>
              ABOUT SPACEX
            </Link>
          </div>
          <div className='nav-item-company'>
            <Link className='nav-link-company' to='/careers'>
              CAREERS
            </Link>
          </div>
          <div className='nav-item-company'>
            <Link className='nav-link-company' to='/gallery'>
              GALLERY
            </Link>
          </div>
          <div className='nav-item-company'>
            <Link className='nav-link-company nav-link-shop' to='/shop'>
              SHOP
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
