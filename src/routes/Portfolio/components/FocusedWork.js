import React, { PropTypes } from 'react'
import './FocusedWork.scss'

class FocusedWork extends React.Component {

  createDescription () {
    if (this.props.description) {
      return (
        <div
          className='focused-work-description'
          dangerouslySetInnerHTML={{ __html: this.props.description }}
        />
      )
    }

    return null
  }

  render () {
    return (
      <div className='focused-work' onClick={this.props.onClick}>
        <div className='focused-work-content'>
          <img className='focused-work-image' src={this.props.url} />
          {this.createDescription()}
        </div>
      </div>
    )
  }
}

FocusedWork.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  parent: PropTypes.number,
  order: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string
}

export default FocusedWork
