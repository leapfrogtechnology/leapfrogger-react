import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';
import { store } from './../../App';

export const validateEmail = (token) => {
  console.log('11111', Resource.emailValidation(token));  
  return (dispatch) => {
    dispatch(networkFetching())
    fetch(uri.EMAIL_VALIDATION, Resource.emailValidation(token))
    .then(data => data.json())
    .then(json => {
      console.log('json:', json)
      dispatch(validateLFEmail())
    })
    .catch(err => dispatch(networkFetchError(err)))
  }
}

export const fetchEmployeeFromAPI = (apiKey) => {
  return (dispatch) => {
    dispatch(networkFetching())
    fetch(uri.EMPLOYEES_LIST, Resource.employeesList(apiKey))
    .then(data => data.json())
    .then(jsonResponse => {
      // console.log('json:', jsonResponse);
      var myProfile = util.getMyInformation(jsonResponse, store.getState().rootReducer.auth.user.email)[0];
      dispatch(myProfileInfo(myProfile));
      dispatch(getEmployeeList(jsonResponse));
      console.log('ooooo', groupEmployeesOnDepartmentBasis(util.groupByDepartment(jsonResponse)))
      dispatch(groupEmployeesOnDepartmentBasis(util.groupByDepartment(jsonResponse)))
    })
    .catch(err => {dispatch(networkFetchError(err))})
  }
}

fetchAction = (uri, completion) => {
  console.log('22222');
  return 
  dispatch(networkFetching())  
  fetch(uri)
    .then(data => data.json())
    .then(data => dispatch(completion(data)))
    .catch(error => dispatch(networkFetchError()));
}

networkFetching = () => {
  console.log('33333');  
  return {
    type: ActionType.NETWORK_FETCHING,
  }
}

networkFetchError = () => {
  console.log('44444');  
  return {
    type: ActionType.NETWORK_FETCH_ERROR,    
  }
}

validateLFEmail = () => {
  console.log('55555');
  return {
    type: ActionType.VALIDATE_EMAIL,
    payload: {
      valid: true,
    }
  }
}

getEmployeeList = (employees) => {
  return {
    type: ActionType.EMPLOYEES_LIST,
    employees
  }
}

groupEmployeesOnDepartmentBasis = (groupedEmployees) => {
  console.log('55555xxx', groupedEmployees);  
  return {
    type: ActionType.GROUP_EMPLOYEES_DEPARTMENT_BASIS,
    groupedEmployees
  }
}

myProfileInfo = (myProfile) => {
  return {
    type: ActionType.MY_PROFILE,
    myProfile
  }
}
