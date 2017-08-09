import React from 'react'

/**
 * logo
 */

class Logo extends React.Component {
  constructor () {
    super()
    this.state = {
      logo: 'http://image.wufazhuce.com/www-fp-logo.png'
    }
  }

  render () {
    return (
      <a className="logo">
        <img src={this.state.logo}/>
      </a>
    )
  }
}

/**
 * header
 */

export default class Header extends React.Component {
  render () {
    return (
      <div className="row">
        <div id="header" className="col-md-12">
          <table>
            <tbody>
              <tr>
                <td>
                  <Logo/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}