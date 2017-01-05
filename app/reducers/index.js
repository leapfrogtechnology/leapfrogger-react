import { combineReducers } from 'redux';
import homeNavReducer from './homeNavReducer';
import employeeReducer from './employeeReducer';
import mainNavReducer from './mainNavReducer';
import favouriteReducer from './favouriteReducer'

const rootReducer = combineReducers({
  homeNavReducer,
  employeeReducer,
  mainNavReducer,
  favouriteReducer
})

export default rootReducer;
