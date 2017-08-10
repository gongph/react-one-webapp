import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import { getHpById } from '../model/hp.js'

/**
 * 插画详情页
 */

class HpDetail extends React.Component {
  componentDidMount () {
    document.title = `${this.props.hp.hp_title} -「ONE · 一个」`
  }

  render () {
    let hp = this.props.hp
    return (
      <div className="one row">
        <div className="col-md-12">
          <div className="tab-content">
            <div className="one-imagen">
              <img src={hp.hp_img_url}/>
            </div>
            <div className="one-imagen-footer">
              <div className="one-titulo">{hp.hp_title}</div>
              <div className="one-imagen-leyenda">{hp.hp_author.substring(0, 2)}<br/></div>
              <div className="clearfix"></div>
            </div>
            <div className="one-cita-wrapper">
              <div className="one-cita">
                {hp.hp_content}
              </div>
              <div className="one-pubdate">
                <div className="dom">{new Date(hp.hp_makettime).getDate()}</div>
                <div className="may">Aug 2017</div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class Hp extends React.Component {
  constructor () {
    super()
    this.state = {
      hp: null
    }
  }
  componentDidMount () {
    let id = this.props.match.params.id
    getHpById(id).then((response) => {
      this.setState({
        hp: response.data
      })
    })
  }

  render () {
    let hp = this.state.hp, hpDetail
    if (hp) {
      hpDetail = <HpDetail hp={hp}/>
    } else {
      hpDetail = ''
    }

    return (
      <div>
        <div className="container">
          <Header/>
        </div>
        <div id="main-container" className="container">
          {hpDetail}
          <Footer/>
        </div>
      </div>
    )
  }
}