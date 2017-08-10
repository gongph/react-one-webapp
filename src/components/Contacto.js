import React from 'react' 
import Header from './Header.js'
import Footer from './Footer.js'

/**
 * 联系我们
 */

export default class Contacto extends React.Component {
  componentDidMount () {
    document.title = '联系我们 - 「ONE · 一个」'
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
              <h2>联系我们</h2> 
            </div>
            <section>
              <h3>新浪微博</h3>
              <ul className="list-unstyled site-contacto-weibo">
                <li>
                  <a href="http://e.weibo.com/duchangtuanparty" target="_blank">@一个App工作室</a>
                </li>
                <li>
                  <a href="http://weibo.com/tianglinzhen" target="_blank">@亭林镇工作室</a>
                </li>
              </ul>
            </section>
            <section>
              <h3>电子邮箱</h3>
              <dl className="dl-horizontal site-contacto-email">
                <dt>「一个」图片投稿</dt>
                <dd><a href="mailto:onetupian@wufazhuce.com">onetupian@wufazhuce.com</a></dd>

                <dt>「一个」文章投稿</dt>
                <dd><a href="mailto:onewenzhang@wufazhuce.com">onewenzhang@wufazhuce.com</a></dd>

                <dt>「一个」问题投稿</dt>
                <dd><a href="mailto:onewenti@wufazhuce.com">onewenti@wufazhuce.com</a></dd>

                <dt>「一个」商务合作</dt>
                <dd><a href="mailto:onebd@wufazhuce.com">onebd@wufazhuce.com</a></dd>
              </dl>
            </section>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}