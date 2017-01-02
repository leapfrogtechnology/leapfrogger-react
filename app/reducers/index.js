import { combineReducers } from 'redux';
import homeNavReducer from './homeNavReducer';
import employeeReducer from './employeeReducer';
import mainNavReducer from './mainNavReducer';

const rootReducer = combineReducers({
  homeNavReducer,
  employeeReducer,
  mainNavReducer
})

export default rootReducer;
