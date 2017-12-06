import uri from 'App/config/uri';
import * as ActionType from 'App/constants/actionsType';
import * as Resource from 'App/utils/networkResource';

validateEmail = (token) => (dispatch) => {
  return 
    // fetch(uri.EMAIL_VALIDATION, Resource.emailValidation(token))
    //   .then(response => response.json())
    //   .then(response => dispatch(validateLFEmail()))
    //   .catch(error => dispatch(networkFetchError()));
    dispatch(fetchAction((uri.EMAIL_VALIDATION, Resource.emailValidation(token)), validateEmail))
}

fetchAction = (uri, completion) => {
  return 
  dispatch(networkFetching())  
  fetch(uri)
    .then(data => data.json())
    .then(data => dispatch(completion(data)))
    .catch(error => dispatch(networkFetchError()));
}

networkFetching = () => {
  return {
    type: ActionType.NETWORK_FETCHING,
  }
}

networkFetchError = () => {
  return {
    type: ActionType.NETWORK_FETCH_ERROR,
  }
}

validateLFEmail = () => {
  return {
    type: ActionType.VALIDATE_EMAIL,
  }
}
