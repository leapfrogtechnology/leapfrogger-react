import { combineReducers } from 'redux';
import homeNavReducer from './homeNavReducer';
import employeeReducer from './employeeReducer';
import mainNavReducer from './mainNavReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
  homeNavReducer,
  employeeReducer,
  mainNavReducer,
  userReducer
})

export default rootReducer;
