import React, { PropTypes } from 'react'
import './FocusedWork.scss'

const FocusedWork = ({ onClick, url }) => (
  <div className='focused-work' onClick={onClick}>
    <div className='focused-work-content'>
      <img className='focused-work-image' src={url} />
    </div>
  </div>
)

FocusedWork.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  parent: PropTypes.number,
  order: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  text: PropTypes.string
}

export default FocusedWork
