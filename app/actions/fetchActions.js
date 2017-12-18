import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';
import * as employeeAction from './employeeActions';
import * as userAction from './userActions';
import * as departmentAction from './departmentActions';
import { store } from './../../App';

export const validateEmail = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
      dispatch(networkFetching(true));    
      fetch(`${uri.EMAIL_VALIDATION}?token=${token}`, Resource.emailValidation())
      .then(data => data.json())
      .then(json => {
        dispatch(userAction.validateLFEmail(json))
        dispatch(networkFetching(false));
        resolve(json);      
      })
      .catch(err => {
        reject(err);
        dispatch(networkFetchError(err))
      })
    }
  )
}

export const fetchEmployeesAndDepartmentsFromAPI = (apiKey) => {
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
        dispatch(departmentAction.departmentList(departments)),
        dispatch(employeeAction.employeeList(employees)),
        dispatch(userAction.myProfileInfo(myProfile))
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

// For local guest
export const setGuestEmployeeAndDepartmentLocal = (employees, departments) => {
  return (dispatch) => {
    dispatch(employeeAction.groupEmployeesOnDepartmentBasis(util.groupByDepartment(employees, departments))),          
    dispatch(departmentAction.departmentList(departments)),
    dispatch(employeeAction.employeeList(employees)),
    dispatch(userAction.myProfileInfo(employees[0]))
  }
}
