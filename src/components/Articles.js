import React from 'react' 
import { Link } from 'react-router-dom'

import { getEssays } from '../model/essay.js'

/**
 * 右侧文章列表
 */

class FirstEssay extends React.Component {
  render () {
    return (
      <div className="corriente">
        <p className="one-titulo">{'VOL.' + this.props.vol}</p>
          <p className="one-articulo-titulo">
            <Link to={'/article/' + this.props.essay.content_id}>
              {this.props.essay.hp_title}
              <small> - {this.props.essay.author[0].user_name}</small>
            </Link>
          </p>
      </div>
    )
  }
}

class EssayItem extends React.Component {
  render () {
    return (
      <li>
        <span className="text-muted">{'VOL.' + this.props.vol} </span>
        <Link to={'/article/' + this.props.essay.content_id}>
          {this.props.essay.hp_title}
          <small> - {this.props.essay.author[0].user_name}</small>
        </Link>
      </li>
    )
  }
}

export default class Essays extends React.Component {
  constructor () {
    super()
    this.state = {
      essays: []
    }
  }

  componentDidMount () {
    getEssays().then((response) => {
      let attr = response.data
      this.setState({
        essays: attr.slice(0, 7 - attr.length)
      })
    })
  }
  
  render () {
    let vol = this.props.vol, firstEssay = [], essays = []
    this.state.essays.map((essay, index) => {
      if (index == 0) {
        firstEssay.push(<FirstEssay essay={essay} key={essay.content_id} vol={vol}/>)
      } else {
        essays.push(<EssayItem essay={essay} key={essay.content_id} vol={vol - index}/>)
      }
    })
    return (
      <div className="fp-one-articulo">
        <h4>ONE 文章</h4>
        {firstEssay}
        <ul className="list-unstyled pasado">
          {essays}
        </ul>
      </div>
    )
  }
}