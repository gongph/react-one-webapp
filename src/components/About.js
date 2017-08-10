import React from 'react' 
import Header from './Header.js'
import Footer from './Footer.js'

/**
 * 关于
 */

export default class About extends React.Component {
  componentDidMount () {
    document.title = '关于 - 「ONE · 一个」'
  }

  render () {
    return (
      <div>
        <div className="container">
          <Header/>
        </div>
        <div id="main-container" className="container">
          <div className="site-content">
            <div className="page-header">
              <h2>关于</h2> 
            </div>
            <section>
              <p>「ONE · 一个」隶属于上海有树文化传播有限公司，是由韩寒主编和监制，原《独唱团》主创成员共同制作的文艺应用软件。发布不到 24 个小时就登上 App Store 免费排行总榜第一名。</p>
              <p>不追热点，不关时政，不要喧哗，不惹纷争。关掉微博，离开微信，带着微笑，去到 Web 0.1 时代。「一个」足够简单。</p>
              <p>&nbsp;</p>
              <dl className="dl-horizontal site-acercade-equipo">
                <dt>出品人/监制</dt>
                <dd>韩寒</dd>
                <dt>执行主编</dt>
                <dd>小饭</dd>
                <dt>副&nbsp; 主&nbsp; 编</dt>
                <dd>金丹华</dd>
                <dt>执行编辑</dt>
                <dd>贺伊曼 一言 薛诗汉 赵西栋 金子棋</dd>
                <dt>流程监督</dt>
                <dd>金怡玉玲 向可</dd>
                <dt>美术编辑</dt>
                <dd>刘小禄 陆骏璇</dd>
              </dl>
              <p>&nbsp;</p>
              <p>复杂世界里，一个就够了。</p>
            </section>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}