import React, { Component } from 'react'

import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import Careers from './Careers/Careers'
import Gallery from './Gallery/Gallery'
import Shop from './Shop/Shop'
import { Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/careers' component={Careers} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/shop' component={Shop} />
      </div>
    )
  }
}

export default App
