import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage.js'
import Article from './components/Article.js'
import Question from './components/Question.js'

render((
  <Router>
    <div>
      <Route exact path="/" component={IndexPage}/>
      <Route path="/article/:id" component={Article}/>
      <Route path="/question/:id" component={Question}/>
    </div>
  </Router>
), document.getElementById('app'))