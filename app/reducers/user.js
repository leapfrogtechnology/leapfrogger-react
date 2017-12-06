import * as actionType from 'App/constants/actionsType';

const initialState = {
  isValid: false,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionType.VALIDATE_EMAIL:
      return {
        ...state,
        isValid: true,
      };
    
    default:
      return state;
  }
};

export default user;
