import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import config from './config'
import { BrowserRouter as Router } from 'react-router-dom'
firebase.initializeApp(config)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
