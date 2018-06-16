import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'

import Home from './Home/Home'
import Falcon9 from './Falcon9/Falcon9'
import FalconHeavy from './FalconHeavy/FalconHeavy'
import Dragon from './Dragon/Dragon'
import About from './About/About'
import Careers from './Careers/Careers'
import Gallery from './Gallery/Gallery'
import Shop from './Shop/Shop'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/falcon9' component={Falcon9} />
        <Route path='/falcon-heavy' component={FalconHeavy} />
        <Route path='/dragon' component={Dragon} />
        <Route path='/about' component={About} />
        <Route path='/careers' component={Careers} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/shop' component={Shop} />
      </div>
    )
  }
}

export default App
