import { createStore, applyMiddleware } from 'redux'
import rootReducer from './../reducers'
import thunk from 'redux-thunk'

export default configureStore = () => {
  let store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}
