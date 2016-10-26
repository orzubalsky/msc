import React from 'react'
import Header from './Header'
import FocusedWorkList from './FocusedWorkList'
import WorkList from './WorkList'
import '../../../styles/core.scss'

export const Portfolio = (props) => (
  <div className='portfolio'>
    <Header
      browser={props.browser}
      focus={props.focused}
      interactedWith={props.headerInteractedWith}
      onClick={props.unfocus}
      onFirstClick={props.focusFirst}
    />
    <FocusedWorkList
      browser={props.browser}
      collection={props.collectionForFocused}
      focused={props.focused}
      focusedIndex={props.focusedIndex}
      onWorkClick={props.nextItem}
      onWorkLeftSwipe={props.nextItem}
      onWorkRightSwipe={props.previousItem}
      onPaginationClick={props.focusItem}
    />
    <WorkList
      browser={props.browser}
      works={props.parents}
      focusedIndex={props.focusedParentIndex}
      workHovered={props.workHovered}
      onWorkClick={props.focusParent}
      onWorkMouseEnter={props.setWorkHovered}
    />
  </div>
)

Portfolio.propTypes = {
  browser              : React.PropTypes.object.isRequired,
  collectionForFocused : React.PropTypes.array.isRequired,
  parents              : React.PropTypes.array.isRequired,
  focused              : React.PropTypes.object.isRequired,
  focusedIndex         : React.PropTypes.number.isRequired,
  focusedParentIndex   : React.PropTypes.number.isRequired,
  headerInteractedWith : React.PropTypes.bool.isRequired,
  workHovered          : React.PropTypes.bool.isRequired,
  unfocus              : React.PropTypes.func.isRequired,
  nextItem             : React.PropTypes.func.isRequired,
  previousItem         : React.PropTypes.func.isRequired,
  focusItem            : React.PropTypes.func.isRequired,
  focusParent          : React.PropTypes.func.isRequired,
  focusFirst           : React.PropTypes.func.isRequired,
  setWorkHovered       : React.PropTypes.func.isRequired
}

export default Portfolio
