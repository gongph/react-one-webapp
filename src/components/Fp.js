import React from 'react' 

/**
 * 首页底部扫二维码组件
 */

export default class Fp extends React.Component {
  render () {
    return (
      <div className="fp-one-app">
        <h4>App「一个」</h4>
        <p>每天只为你准备一张图片、一篇文字和一个问答 <br/>
        韩寒主编和监制 原《独唱团》主创成员共同制作</p>
        <p>
          <img src="http://image.wufazhuce.com/www-app_qrcode_iphone.png" style={{width: '30%'}}/>
          <img src="http://image.wufazhuce.com/www-app_qrcode_android.png" style={{width: '30%'}}/>
          <img src="http://image.wufazhuce.com/www-wx_qrcode.png" style={{width: '30%'}}/>
        </p>
        <p>- 也可搜索 - <br/> "韩寒一个" 或 "ONE一个" </p>
      </div>
    )
  }
}

