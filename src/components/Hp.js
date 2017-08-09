import React from 'react' 
import Carousel from './Carousel.js'

/**
 * 插画列表组件
 */

export default class Hp extends React.Component {
  render () {
    return (
      <div className="fp-one">
        <Carousel hps={this.props.hps}/>
      </div>
    )
  }
}