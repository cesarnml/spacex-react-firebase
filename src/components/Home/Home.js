import React from 'react'

import Carousel from './Carousel'
import Content from './Content'
import Footer from './Footer'

// <video className='carousel__movie' playsinline muted loop>
// <source src={carouselMovie} type='video/mp4' />
// </video>

const Home = () => {
  return (
    <div className='Home'>
      <Carousel />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
