import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import Velocity from 'velocity-animate'
import Work from './Work'
import './WorkList.scss'

class WorkList extends React.Component {

  componentDidMount () {
    window.addEventListener('orientationchange', this.setScrollPosition.bind(this))
  }

  componentDidUpdate () {
    this.setScrollPosition()
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
      <div>
        {works.map((work, index) =>
          <Work
            key={work.id}
            isActive={this.isActive(index)}
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
    let style = {
      phone: { width: (works.length * 12) + 'rem' },
      phoneLandscape: { width: (works.length * 8) + 'rem' },
      tablet: { width: (works.length * 16) + 'rem' },
      tabletLandscape: { width: (works.length * 16) + 'rem' }
    }

    return (
      <div ref='scrollContainer' className='works-outer'>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 767px) and (orientation: portrait)'>
          <div className={className} style={style.phone}>
            {this.buildWorks(works)}
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 320px) and (max-device-width: 767px) and (orientation: landscape)'>
          <div className={className} style={style.phoneLandscape}>
            {this.buildWorks(works)}
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (orientation: portrait)'>
          <div className={className} style={style.tablet}>
            {this.buildWorks(works)}
          </div>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 768px) and (orientation: landscape)'>
          <div className={className} style={style.tabletLandscape}>
            {this.buildWorks(works)}
          </div>
        </MediaQuery>
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
  onWorkClick: PropTypes.func.isRequired
}

export default WorkList
