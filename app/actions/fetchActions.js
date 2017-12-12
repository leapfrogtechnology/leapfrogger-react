import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';
import * as employeeAction from './employeeActions';
import { store } from './../../App';

export const validateEmail = (token) => {
  return (dispatch) => {
    dispatch(networkFetching())
    fetch(`${uri.EMAIL_VALIDATION}?token=${token}`, Resource.emailValidation())
    .then(data => data.json())
    .then(json => {
      dispatch(validateLFEmail())
    })
    .catch(err => {
      dispatch(networkFetchError(err))
    })
  }
}

// export const fetchEmployeeFromAPI = (apiKey) => {
//   return (dispatch) => {
//     dispatch(networkFetching(true))
//     fetch(uri.EMPLOYEES_LIST, Resource.employeesList(apiKey))
//     .then(data => data.json())
//     .then(jsonResponse => {
//       // console.log('json:', jsonResponse);
//       var state = store.getState();
//       var myProfile = util.getMyInformation(jsonResponse, state.rootReducer.auth.user.email)[0];
//       dispatch(employeeAction.myProfileInfo(myProfile));
//       dispatch(employeeList(jsonResponse));
//       dispatch(employeeAction.groupEmployeesOnDepartmentBasis(util.groupByDepartment(jsonResponse), state.rootReducer.department.departments))
//       dispatch(networkFetching(false));
//     })
//     .catch(err => {
//       // console.log('error-------');
//       dispatch(networkFetching(false));      
//       dispatch(networkFetchError(err))
//     })
//   }
// }

export const fetchEmployeesAndDepartmentsFromAPI = (apiKey) => {
  var departResponse = [];
  return (dispatch) => {
    dispatch(networkFetching(true))
    //---------------------FETCH DEPARTMENT LIST-------------------
    fetch(uri.DEPARTMENT_LIST, Resource.employeesList(apiKey))
    .then(data => data.json())
    .then(departmentResponse => {
      departResponse = departmentResponse
      dispatch(departmentList(departmentResponse));
    })
    .catch(err => {
      dispatch(networkFetchError(err))
    })
    //---------------------FETCH EMPLOYEES LIST-------------------
    .then(() => { 
      fetch(uri.EMPLOYEES_LIST, Resource.employeesList(apiKey))
      .then(data => data.json())
      .then(empResponse => {
        var state = store.getState();
        var myProfile = util.getMyInformation(empResponse, state.rootReducer.auth.user.email)[0];
        dispatch(employeeList(empResponse));                
        dispatch(employeeAction.myProfileInfo(myProfile));
        dispatch(employeeAction.groupEmployeesOnDepartmentBasis(util.groupByDepartment(empResponse, departResponse)))
        dispatch(networkFetching(false));
      })
      .catch(err => {
        dispatch(networkFetchError(err))
      })
    })
  }    
}

networkFetching = (isFetching) => {
  return {
    type: ActionType.NETWORK_FETCHING,
    isFetching
  }
}

networkFetchError = () => {
=  return {
    type: ActionType.NETWORK_FETCH_ERROR,    
  }
}

validateLFEmail = () => {
  return {
    type: ActionType.VALIDATE_EMAIL,
    payload: {
      valid: true,
    }
  }
}

employeeList = (employees) => {
  return {
    type: ActionType.EMPLOYEES_LIST,
    employees
  }
}

departmentList = (departments) => {
  return {
    type: ActionType.DEPARTMENT_LIST,
    departments
  }    
}
