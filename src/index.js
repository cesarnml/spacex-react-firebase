import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import firebase from 'firebase'

const config = {
  YOUTUBE_API_KEY: 'AIzaSyBAfsB8aggg6-KKafuSdt2fV1UyqGjzb90',
  apiKey: 'AIzaSyDQ8ZtZD2qYA4s3QexQqnHpb_z3OY1aTmU',
  authDomain: 'spacex-react-firebase.firebaseapp.com',
  databaseURL: 'https://spacex-react-firebase.firebaseio.com',
  projectId: 'spacex-react-firebase',
  storageBucket: '',
  messagingSenderId: '530350479676'
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
