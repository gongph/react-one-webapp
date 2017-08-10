import React from 'react'
import path from 'path'
import Hps from './Hps.js'
import Articles from './Articles.js'
import Questions from './Questions.js'
import { getHps } from '../model/hp.js'

/**
 * 主体内容组件
 */

export default class MainContent extends React.Component {
  constructor () {
    super()
    this.state = {
      hps: [], // 图文列表
      vol: 0  // 版本号
    }
  }

  componentDidMount () {
    getHps().then((response) => {
      this.setState({
        hps: response.data,
        vol: Number(response.data[0].hp_title.split('.')[1])
      })
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-8">
          <Hps hps={this.state.hps}/>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <Articles vol={this.state.vol}/>
              <Questions vol={this.state.vol}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}