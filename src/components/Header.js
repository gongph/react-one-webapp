import React from 'react'
import { Link } from 'react-router-dom'

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
      <Link to="/" className="logo">
        <img src={this.state.logo}/>
      </Link>
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