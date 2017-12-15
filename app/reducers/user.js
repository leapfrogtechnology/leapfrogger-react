import * as actionType from 'App/constants/actionsType';

const initialState = {
  validationResponse: null,
  myProfile: null,
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

    case actionType.LOGOUT:
      return {
        ...state,
        myProfile: null,
        validationResponse: null,
      }

    default:
      return state;
  }
};

export default user;
