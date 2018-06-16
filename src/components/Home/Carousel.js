import React from 'react'

const Carousel = () => {
  return (
    <div className='Carousel'>
      <div className='carousel__overlay'>
        <div className='carousel__overlay-header'>
          <h2 className='carousel__title'>FALCON HEAVY &amp; STARMAN</h2>
          <div className='carousel__btn'>WATCH VIDEO</div>
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
  )
}

export default Carousel
