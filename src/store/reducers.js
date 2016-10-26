import { combineReducers } from 'redux'
import { createResponsiveStateReducer } from 'redux-responsive'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    browser: createResponsiveStateReducer({
      phone: 320,
      tablet: 768,
      laptop: 960,
      wide: 1200
    }),
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
