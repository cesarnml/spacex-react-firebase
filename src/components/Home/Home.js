import React from 'react'

import carouselRocket from '../../assets/carousel_rocket.jpg'
import carouselMovie from '../../assets/carousel_movie.mp4'
import carouselMars from '../../assets/carousel_mars.jpg'
import './Home.css'

// <video className='carousel__movie' playsinline muted loop>
// <source src={carouselMovie} type='video/mp4' />
// </video>

const Home = () => {
  return (
    <div className='Home'>
      <div className='wrapper__movie'>
        <img className='carousel__image' src={carouselRocket} />
        <div className='carousel__overlay'>
          <h2 className='carousel__title--active'>Falcon Heavy & Starman</h2>
          <button className='carousel__button--active'>Watch Video</button>
        </div>
      </div>

      <div className='carousel__menu'>
        <div className='carousel__menu-item'>
          <div className='carousel__menu-num'>01</div>
          <div className='carousel__menu-title'>SES-12 MISSION</div>
        </div>
        <div className='carousel__menu-item'>
          <div className='carousel__menu-num'>02</div>
          <div className='carousel__menu-title'>FALCON HEAVY & STARMAN</div>
        </div>
        <div className='carousel__menu-item'>
          <div className='carousel__menu-num'>03</div>
          <div className='carousel__menu-title'>MAKING LIFE MULTIPLANETARY</div>
        </div>
      </div>
    </div>
  )
}

export default Home
