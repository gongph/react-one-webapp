import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage.js'
import Article from './components/Article.js'
import Question from './components/Question.js'
import About from './components/About.js'

render((
  <Router>
    <div>
      <Route exact path="/" component={IndexPage}/>
      <Route path="/article/:id" component={Article}/>
      <Route path="/question/:id" component={Question}/>
      <Route path="/acercade" component={About}/>
    </div>
  </Router>
), document.getElementById('app'))