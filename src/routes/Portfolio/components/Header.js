import _ from 'underscore'
import React, { PropTypes } from 'react'
import MediaQuery from 'react-responsive'
import About from './About'
import Contact from './Contact'
import './Header.scss'

class Header extends React.Component {

  buildAbout () {
    return (
      <About />
    )
  }

  render () {
    let className = this.props.focus.id > 0 ? 'header header--focused' : 'header'
    let about = this.props.interactedWith && _.isEmpty(this.props.focus) ? this.buildAbout() : null
    let clickAction = this.props.interactedWith ? this.props.onClick : this.props.onFirstClick

    if (this.props.interactedWith && _.isEmpty(this.props.focus)) {
      className += ' header--interacted'
    }

    return (
      <header className={className}>
        <h1 className='header-name' onClick={() => clickAction()}>
          MAGDALENE CARSON
          <i className='header-icon fa fa-envelope-o' aria-hidden='true' />
        </h1>
        <MediaQuery query='(min-device-width: 960px)'>
          <div className='contact-top'>
            <Contact />
          </div>
        </MediaQuery>
        {about}
      </header>
    )
  }
}

Header.propTypes = {
  browser: React.PropTypes.object.isRequired,
  focus: PropTypes.object.isRequired,
  interactedWith: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onFirstClick: PropTypes.func.isRequired
}

export default Header
