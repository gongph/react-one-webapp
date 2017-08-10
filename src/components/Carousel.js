import React from 'react' 
import { Link } from 'react-router-dom'

/**
 * Bootstrap 的 Carousel 插件
 * http://v3.bootcss.com/javascript/#carousel
 */

class CarouselInnerItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hpText: '插画'
    }
  }

  render () {
    let index = this.props.index, hp = this.props.hp
    return (
      <div className={index == 0 ? 'item active' : 'item'}>
        <Link to={'/one/' + hp.hpcontent_id}>
          <img className="fp-one-imagen" src={hp.hp_img_url}/>
        </Link>
        <div className="fp-one-imagen-footer">{this.state.hpText}</div>
        <div className="fp-one-cita-wrapper">
          <div className="fp-one-titulo-pubdate">
            <p className="titulo">{hp.hp_title}</p>
            <p className="dom">{new Date(hp.hp_makettime).getDate()}</p>
            <p className="may">Aug 2017</p>
          </div>
          <div className="fp-one-cita">
            <Link to={'/one/' + hp.hpcontent_id}>{hp.hp_content}</Link>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

class CarouselInnerList extends React.Component {
  render () {
    const carouselInnerItems = []
    this.props.hps.map((hp, index) => {
      carouselInnerItems.push(<CarouselInnerItem hp={hp} key={hp.hpcontent_id} index={index}/>)
    })
    return (
      <div className="carousel-inner">
        { carouselInnerItems }
        <a className="left carousel-control" href="#carousel-one" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="right carousel-control" href="#carousel-one" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
        <CarouselIndicators hps={this.props.hps}/>
      </div>
    )
  }
}

class CarouselIndicatorsItem extends React.Component {
  render () {
    const index = this.props.index
    return (
      <li data-target="#carousel-one" data-slide-to={index} className={index == 0 ? 'active' : ''}></li>
    )
  }
}

class CarouselIndicators extends React.Component {
  render () {
    const indicators = []
    this.props.hps.map((hp, index) => {
      indicators.push(<CarouselIndicatorsItem key={hp.hpcontent_id} index={index}/>)
    })
    return (
      <ol className="carousel-indicators">
        { indicators }
      </ol>
    )
  }
}

export default class Carousel extends React.Component {
  render () {
    return (
      <div id="carousel-one" className="carousel slide">
        <CarouselInnerList hps={this.props.hps}/>
      </div>
    )
  }
}