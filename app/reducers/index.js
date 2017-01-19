import { combineReducers } from 'redux';
import homeNavReducer from './homeNavReducer';
import employeeReducer from './employeeReducer';
import mainNavReducer from './mainNavReducer';
import favouriteReducer from './favouriteReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  homeNavReducer,
  employeeReducer,
  mainNavReducer,
  favouriteReducer,
  userReducer
})

export default rootReducer;
