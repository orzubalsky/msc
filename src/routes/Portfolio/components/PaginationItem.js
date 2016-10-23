import React, { PropTypes } from 'react'
import './PaginationItem.scss'

class PaginationItem extends React.Component {

  render () {
    let className = this.props.isActive ? 'pagination-item pagination-item--active' : 'pagination-item'
    let work = this.props.work

    return (
      <li
        className={className}
        onClick={() => { this.props.onWorkClick(work) }}
      />
    )
  }
}

PaginationItem.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.number.isRequired,
    parent: PropTypes.number,
    order: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onWorkClick: PropTypes.func.isRequired
}

export default PaginationItem
