import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Velocity from 'velocity-animate'
import Swipeable from 'react-swipeable'
import FocusedWork from './FocusedWork'
import PaginationItem from './PaginationItem'
import './FocusedWorkList.scss'
import './Pagination.scss'

class FocusedWorkList extends React.Component {

  componentDidMount () {
    window.addEventListener('orientationchange', this.setScrollPosition.bind(this))
  }

  componentDidUpdate () {
    this.setScrollPosition()
  }

  setScrollPosition () {
    if (this.props.focusedIndex > -1) {
      const containerNode = ReactDOM.findDOMNode(this.refs.scrollContainer)
      const workNode = containerNode.children[0].children[this.props.focusedIndex]

      return Velocity(workNode, 'scroll', {
        container: containerNode,
        duration: 100,
        axis: 'x',
        delay: 50
      })
    }
  }

  isActive (index) {
    return this.props.focusedIndex === index
  }

  createPagination () {
    if (this.props.collection.length > 1) {
      return (
        <ul className='focused-work-pagination'>
          {this.props.collection.map((work, index) =>
            <PaginationItem
              key={work.id}
              isActive={this.isActive(index)}
              work={work}
              onWorkClick={this.props.onPaginationClick}
            />
          )}
        </ul>
      )
    }

    return null
  }

  render () {
    let collection = this.props.collection
    let focusedWork = collection ? collection[this.props.focusedIndex] : null
    let style
    if (collection) {
      style = { width: (collection.length * 100) + 'vw' }
    }
    let className = focusedWork ? 'focused-works-outer focused-works-outer--active' : 'focused-works-outer'

    if (focusedWork) {
      return (
        <div>
          <div ref='scrollContainer' className={className}>
            <Swipeable
              style={style}
              className='focused-works-inner'
              onSwipedLeft={() => { this.props.onWorkLeftSwipe(focusedWork) }}
              onSwipedRight={() => { this.props.onWorkRightSwipe(focusedWork) }}
              delta={0}
            >
              {collection.map(work =>
                <FocusedWork
                  key={work.id}
                  {...work}
                  onClick={() => this.props.onWorkClick(work)}
                />
              )}
            </Swipeable>
          </div>
          {this.createPagination()}
        </div>
      )
    }
    return (
      <div className={className} />
    )
  }
}

FocusedWorkList.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    parent: PropTypes.number,
    order: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    text: PropTypes.string
  }).isRequired),
  focused: PropTypes.object,
  focusedIndex: PropTypes.number,
  onWorkClick: PropTypes.func.isRequired,
  onWorkLeftSwipe: PropTypes.func.isRequired,
  onWorkRightSwipe: PropTypes.func.isRequired,
  onPaginationClick: PropTypes.func.isRequired
}

export default FocusedWorkList
