import React from 'react' 
import { Link } from 'react-router-dom'

/**
 * footer
 */

export default class Footer extends React.Component {
  render () {
    return (
      <div id="footer">
        <div className="container">
          <hr/>
          <p className="text-muted"> © 2012-2014 <a href="http://wufazhuce.com/">「ONE · 一个」</a></p>
          <p className="text-muted">
            <Link to="/acercade">关于</Link>
            <Link to="/politica">用户协议</Link>
            <Link to="/contacto">联系我们</Link>
          </p>
          <p className="text-muted">
            <a href="http://weibo.com/duchangtuanparty" target="_blank">一个App工作室</a>
            <a href="http://weibo.com/tianglinzhen" target="_blank">亭林镇工作室</a>
            <a href="http://zuicool.com/" target="_blank" rel="follow" title="健康跑、马拉松、越野跑、铁人三项、自行车的耐力运动分享社区 - 比赛、报名、成绩、照片、装备">最酷ZUICOOL</a>
          </p>
          <p>复杂世界里, 一个就够了. One is all.</p>
          <p className="text-muted">
            <a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow" className="text-muted">沪ICP备13042400号</a>
          </p>
        </div>
      </div>
    )
  }
}