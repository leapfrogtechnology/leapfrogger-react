import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';
import * as employeeAction from './employeeActions';
import { store } from './../../App';

export const validateEmail = (token) => (dispatch) => {
  console.log('===111')  
  return new Promise((resolve, reject) => {
      dispatch(networkFetching(true));    
      fetch(`${uri.EMAIL_VALIDATION}?token=${token}`, Resource.emailValidation())
      .then(data => data.json())
      .then(json => {
        console.log('===', json)
        dispatch(validateLFEmail(json))
        dispatch(networkFetching(false));
        resolve();      
      })
      .catch(err => {
        reject();
        dispatch(networkFetchError(err))
      })
    }
  )
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
  // var departResponse = [];
  return (dispatch) => {
    dispatch(networkFetching(true))
    var requests = [uri.DEPARTMENT_LIST, uri.EMPLOYEES_LIST];
    
    Promise.all(requests.map(request => {
      return fetch(request, Resource.employeesList(apiKey)).then((response) => {
        return response.json();
      }).then((data) => {
          return data;
      });
    })).then((values) => {
      let departments = values[0]
      let employees = values[1]
      let state = store.getState();
      let myProfile = util.getMyInformation(employees, state.rootReducer.auth.user.email)[0];
      
      Promise.all([
        dispatch(employeeAction.groupEmployeesOnDepartmentBasis(util.groupByDepartment(employees, departments))),          
        dispatch(departmentList(departments)),
        dispatch(employeeList(employees)),
        dispatch(employeeAction.myProfileInfo(myProfile))
      ])
      .then(() => dispatch(networkFetching(false)))
    }).catch(err => dispatch(networkFetchError(err)));
  }
}

networkFetching = (isFetching) => {
  return {
    type: ActionType.NETWORK_FETCHING,
    isFetching
  }
}

networkFetchError = () => {
  return {
    type: ActionType.NETWORK_FETCH_ERROR,    
  }
}

validateLFEmail = (validationResponse) => {
  return {
    type: ActionType.VALIDATE_EMAIL,
    validationResponse
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
