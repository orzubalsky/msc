import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Velocity from 'velocity-animate'
import Work from './Work'
import './WorkList.scss'

class WorkList extends React.Component {

  componentDidMount () {
    window.addEventListener('orientationchange', this.setScrollPosition.bind(this))
    window.addEventListener('onresize', this.setDocumentHeight.bind(this))
    this.setDocumentHeight()
  }

  componentDidUpdate () {
    this.setScrollPosition()
  }

  setDocumentHeight () {
    let documentHeight = window.innerHeight || document.clientHeight || document.documentElement.clientHeight
    this.props.onResize(documentHeight)
  }

  setScrollPosition () {
    const containerNode = ReactDOM.findDOMNode(this.refs.scrollContainer)
    const workNode = containerNode.children[0].children[0].children[this.props.focusedIndex]

    return Velocity(workNode, 'scroll', {
      container: containerNode,
      duration: 100,
      axis: 'x',
      delay: 50
    })
  }

  isActive (index) {
    return this.props.focusedIndex === index
  }

  buildWorks (works) {
    return (
      <div className='works-thumbnails'>
        {works.map((work, index) =>
          <Work
            key={work.id}
            isActive={this.isActive(index)}
            width={this.props.documentHeight * 0.15}
            {...work}
            onClick={() => this.props.onWorkClick(work)}
          />
        )}
      </div>
    )
  }

  render () {
    let works = this.props.works
    let className = 'works-inner'
    let style = { width: (works.length * this.props.documentHeight * 0.15) + 'px' }

    return (
      <div ref='scrollContainer' className='works-outer'>
        <div className={className} style={style}>
          {this.buildWorks(works)}
        </div>
      </div>
    )
  }
}

WorkList.propTypes = {
  works: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    parent: PropTypes.number,
    order: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    text: PropTypes.string
  }).isRequired).isRequired,
  focusedIndex: PropTypes.number,
  documentHeight: PropTypes.number.isRequired,
  onWorkClick: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired
}

export default WorkList
