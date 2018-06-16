import React from 'react'

import './Home.css'

// <video className='carousel__movie' playsinline muted loop>
// <source src={carouselMovie} type='video/mp4' />
// </video>

const Home = () => {
  return (
    <div className='Home'>
      <div className='carousel'>
        <div className='carousel__overlay'>
          <div className='carousel__overlay-header'>
            <h2 className='carousel__title'>FALCON HEAVY & STARMAN</h2>
            <button className='carousel__btn'>WATCH VIDEO</button>
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
              <div className='carousel__menu-title'>
                MAKING LIFE MULTIPLANETARY
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
        <h3 className='content__header'>
          SPACE X DESIGNS, MANAFACTURES AND LAUNCHES ADVANCED ROCKETS AND
          SPACECRAFT
        </h3>
        <div className='content__cards'>
          <div className='card'>
            <img className='card-image' />
            <h4 className='card-title'>Title</h4>
            <a className='card-link'>Link</a>
          </div>
          <div className='card'>
            <img className='card-image' />
            <h4 className='card-title'>Title</h4>
            <a className='card-link'>Link</a>
          </div>
          <div className='card'>
            <img className='card-image' />
            <h4 className='card-title'>Title</h4>
            <a className='card-link'>Link</a>
          </div>
        </div>
      </div>
      <div className='footer__spacex'>Footer__Main</div>
      <div className='footer__social'>Footer__Social</div>
    </div>
  )
}

export default Home
