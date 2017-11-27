import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';

import rootReducer from './../reducers';

const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, rootReducer)

export default configureStore = () => {
  let store = createStore(rootReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);  
  return (persistor, store);
}
