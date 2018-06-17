import React from 'react'
import { Link } from 'react-router-dom'

import reusable from '../../assets/home_block_reusable.jpg'
import commercialCrew from '../../assets/home_block_commercial_crew.jpg'
import multiplanetary from '../../assets/makinglifemultiplanetary.jpg'

const Content = () => {
  return (
    <div className='Content'>
      <h3 className='content__header'>
        SPACEX DESIGNS, MANAFACTURES AND LAUNCHES ADVANCED ROCKETS AND
        SPACECRAFT
      </h3>
      <div className='content__cards'>
        <div className='card'>
          <div className='card-image-wrapper'>
            <img
              className='card-image'
              src={reusable}
              alt='reusable rocket on launchpad'
            />
          </div>
          <h4 className='card-title'>
            REUSABILITY: WORLD'S FIRST REFLIGHT OF AN ORBITAL CLASS ROCKET
          </h4>
          <div className='card-link__wrapper'>
            <Link className='card-link' to='#'>
              LEARN MORE
            </Link>&nbsp;&rarr;
          </div>
        </div>
        <div className='card'>
          <div className='card-image-wrapper'>
            <img
              className='card-image'
              src={commercialCrew}
              alt='commerical crew takes astronauts to space'
            />
          </div>
          <h4 className='card-title'>
            COMMERCIAL CREW: TAKING AMERICA'S ASTRONAUTS TO SPACE
          </h4>
          <div className='card-link__wrapper'>
            <Link className='card-link' to='#'>
              LEARN MORE
            </Link>&nbsp;&rarr;
          </div>
        </div>
        <div className='card'>
          <div className='card-image-wrapper'>
            <img
              className='card-image'
              src={multiplanetary}
              alt='rocket launch'
            />
          </div>
          <h4 className='card-title'>
            PRESENTATION: MAKING LIFE MULTIPLANETARY
          </h4>
          <div className='card-link__wrapper'>
            <Link className='card-link' to='#'>
              LEARN MORE
            </Link>&nbsp;&rarr;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
