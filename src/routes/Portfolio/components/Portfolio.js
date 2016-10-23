import React from 'react'
import Header from './Header'
import FocusedWorkList from './FocusedWorkList'
import WorkList from './WorkList'
import '../../../styles/core.scss'

export const Portfolio = (props) => (
  <div className='portfolio'>
    <Header
      focus={props.focused}
      interactedWith={props.headerInteractedWith}
      onClick={props.unfocus}
    />
    <FocusedWorkList
      collection={props.collectionForFocused}
      focused={props.focused}
      focusedIndex={props.focusedIndex}
      onWorkClick={props.nextItem}
      onWorkLeftSwipe={props.nextItem}
      onWorkRightSwipe={props.previousItem}
      onPaginationClick={props.focusItem}
    />
    <WorkList
      works={props.parents}
      focusedIndex={props.focusedParentIndex}
      onWorkClick={props.focusParent}
    />
  </div>
)

Portfolio.propTypes = {
  collectionForFocused : React.PropTypes.array.isRequired,
  parents              : React.PropTypes.array.isRequired,
  focused              : React.PropTypes.object.isRequired,
  focusedIndex         : React.PropTypes.number.isRequired,
  focusedParentIndex   : React.PropTypes.number.isRequired,
  headerInteractedWith : React.PropTypes.bool.isRequired,
  unfocus              : React.PropTypes.func.isRequired,
  nextItem             : React.PropTypes.func.isRequired,
  previousItem         : React.PropTypes.func.isRequired,
  focusItem            : React.PropTypes.func.isRequired,
  focusParent          : React.PropTypes.func.isRequired
}

export default Portfolio
