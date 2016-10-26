import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Velocity from 'velocity-animate'
import Work from './Work'
import './WorkList.scss'

class WorkList extends React.Component {

  componentWillMount () {
    this.multiplier = this.props.browser.orientation === 'landscape' && this.props.browser.width < 768 ? 0.20 : 0.15
  }

  componentDidMount () {
    window.addEventListener('orientationchange', this.setScrollPosition.bind(this))
  }

  componentDidUpdate () {
    this.setScrollPosition()
  }

  setScrollPosition () {
    const containerNode = ReactDOM.findDOMNode(this.refs.scrollContainer)
    const workNode = containerNode.children[0].children[0].children[this.props.focusedIndex]

    return workNode && Velocity(workNode, 'scroll', {
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
            width={this.props.browser.height * this.multiplier}
            {...work}
            onClick={() => this.props.onWorkClick(work)}
            onMouseEnter={() => this.props.onWorkMouseEnter()}
          />
        )}
      </div>
    )
  }

  render () {
    let works = this.props.works
    let className = this.props.workHovered ? 'works-outer' : 'works-outer works-outer--initial'
    let style = { width: (works.length * this.props.browser.height * this.multiplier) + 'px' }

    return (
      <div ref='scrollContainer' className={className}>
        <div className='works-inner' style={style}>
          {this.buildWorks(works)}
        </div>
      </div>
    )
  }
}

WorkList.propTypes = {
  browser: React.PropTypes.object.isRequired,
  works: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    parent: PropTypes.number,
    order: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    text: PropTypes.string
  }).isRequired).isRequired,
  focusedIndex: PropTypes.number,
  workHovered: PropTypes.bool.isRequired,
  onWorkClick: PropTypes.func.isRequired,
  onWorkMouseEnter: PropTypes.func.isRequired
}

export default WorkList
