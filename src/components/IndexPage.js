import React from 'react'
import Header from './Header.js'
import MainContent from './MainContent.js'
import Fp from './Fp.js'
import Footer from './Footer.js'

/**
 * 首页
 */

export default class IndexPage extends React.Component {
  render () {	
    return (
      <div>
        <div className="container">
          <Header/>
        </div>
        <div id="main-container" className="container">
          <MainContent/>
          <Fp/>
          <Footer/>
        </div>
      </div>
    )
  }
}