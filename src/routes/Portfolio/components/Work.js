import React, { PropTypes } from 'react'
import './Work.scss'

class Work extends React.Component {

  render () {
    let className = this.props.isActive ? 'work work--active' : 'work'

    return (
      <div
        className={className}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        style={{ width: this.props.width }}
      >
        <div className='work-content'>
          <span className='work-text'>{this.props.text}</span>
          <img className='work-image' src={this.props.thumbnail} />
        </div>
      </div>
    )
  }
}

Work.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  parent: PropTypes.number,
  order: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  width: PropTypes.number
}

export default Work
