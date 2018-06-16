import React from 'react'

const Content = () => {
  return (
    <div className='Content'>
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
  )
}

export default Content
