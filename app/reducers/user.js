import * as actionType from 'App/constants/actionsType';

const initialState = {
  validationResponse: null,
  myProfile: null,
  employees: [],
  isFetching: false,
  error: null,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionType.VALIDATE_EMAIL:
      return {
        ...state,
        validationResponse: action.validationResponse,
      };
    
    case actionType.MY_PROFILE:
      return {
        ...state,
        myProfile: action.myProfile,
      }

    case actionType.EMPLOYEES_LIST:
      return {
        ...state,
        employees: action.employees,
      };

    case actionType.NETWORK_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    case actionType.NETWORK_FETCH_ERROR:
      return {
        ...state,
        isFetching: false,        
        error: true,
      }

    default:
      return state;
  }
};

export default user;
