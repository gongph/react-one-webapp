import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import IndexPage from './components/IndexPage.js'
import Article from './components/Article.js'

render((
  <Router>
    <div>
      <Route exact path="/" component={IndexPage}/>
      <Route path="/article/:id" component={Article}/>
    </div>
  </Router>
), document.getElementById('app'))