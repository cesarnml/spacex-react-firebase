import React from 'react'

import { UncontrolledCarousel } from 'reactstrap'
import carouselRocket from '../../assets/carousel_rocket.jpg'
import carouselMovie from '../../assets/carousel_movie.mp4'
import carouselMars from '../../assets/carousel_mars.jpg'
import './Home.css'

const items = [
  {
    src: carouselRocket,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: carouselMars,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: carouselRocket,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
]

const Home = () => (
  <UncontrolledCarousel className='carousel-main' items={items} />
)

export default Home
