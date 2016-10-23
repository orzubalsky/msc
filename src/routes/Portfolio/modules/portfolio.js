import initialData from './data'
import {
  collectionNext,
  collectionPrevious,
  collectionFirst
} from './selectors'

// ------------------------------------
// Constants
// ------------------------------------
export const NEXT_ITEM = 'NEXT_ITEM'
export const PREVIOUS_ITEM = 'PREVIOUS_ITEM'
export const FOCUS_PARENT = 'FOCUS_PARENT'
export const FOCUS_ITEM = 'FOCUS_ITEM'
export const UNFOCUS = 'UNFOCUS'

// ------------------------------------
// Actions
// ------------------------------------

export function nextItem (work) {
  return {
    type: NEXT_ITEM,
    work: work
  }
}

export function previousItem (work) {
  return {
    type: PREVIOUS_ITEM,
    work: work
  }
}

export function focusParent (work) {
  return {
    type: FOCUS_PARENT,
    work: work
  }
}

export function focusItem (work) {
  return {
    type: FOCUS_ITEM,
    work: work
  }
}

export function unfocus () {
  return {
    type: UNFOCUS
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(unfocus())
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  nextItem,
  previousItem,
  focusParent,
  focusItem,
  unfocus,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [NEXT_ITEM] : (state, action) => Object.assign({}, state, { focused: collectionNext(state, action.work) }),
  [PREVIOUS_ITEM] : (state, action) => Object.assign({}, state, { focused: collectionPrevious(state, action.work) }),
  [FOCUS_PARENT] : (state, action) => Object.assign({}, state, {
    focused: collectionFirst(state, action.work), headerInteractedWith: true
  }),
  [FOCUS_ITEM] : (state, action) => Object.assign({}, state, { focused: action.work }),
  [UNFOCUS] : (state, action) => Object.assign({}, state, { focused: {} })
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function portfolioReducer (state = initialData, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
