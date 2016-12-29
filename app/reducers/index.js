import { combineReducers } from 'redux';
import navReducer from './navReducer';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  navReducer,
  employeeReducer
})

export default rootReducer;
