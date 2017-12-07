import { uri } from 'App/config/uri';
import * as ActionType from 'App/constants/actionsType';
import * as Resource from 'App/utils/networkResource';

export const validateEmail = (token) => {
  console.log('11111', Resource.emailValidation(token));  
  return (dispatch) => {
    dispatch(networkFetching())
    dispatch(fetchEmployeeFromAPI("KwFCd240ziWFHM-FvpCT6xx34NY9C3o3gtvaSEuh"))
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
  console.log('77777');    
  return (dispatch) => {
    dispatch(networkFetching())
    fetch(uri.EMPLOYEES_LIST, Resource.employeesList(apiKey))
    .then(data => data.json())
    .then(json => {
      console.log('json:', json)
      dispatch(getEmployeeList(json.results))
    })
    .catch(err => dispatch(networkFetchError(err)))
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

getEmployeeList = () => {
  console.log('88888');
  return {
    type: ActionType.EMPLOYEES_LIST,
    data
  }
}
