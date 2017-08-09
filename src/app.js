import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App.js'

render((
  <Router>
    <Route path="/" component={App}/>
  </Router>
),document.getElementById('app'))