import { connect } from 'react-redux'
import {
  nextItem,
  previousItem,
  focusParent,
  focusItem,
  unfocus
 } from '../modules/portfolio'
import {
  allParents,
  collectionForFocused,
  findIndex,
  findParentIndex
} from '../modules/selectors'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Portfolio from '../components/Portfolio'

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  nextItem     : item => nextItem(item),
  previousItem : item => previousItem(item),
  focusParent  : item => focusParent(item),
  focusItem    : item => focusItem(item),
  unfocus      : () => unfocus()
}

const mapStateToProps = (state) => ({
  collectionForFocused : collectionForFocused(state.portfolio),
  parents              : allParents(state.portfolio.works),
  focused              : state.portfolio.focused,
  focusedIndex         : findIndex(state.portfolio, state.portfolio.focused),
  focusedParentIndex   : findParentIndex(state.portfolio, state.portfolio.focused),
  headerInteractedWith : state.portfolio.headerInteractedWith
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
