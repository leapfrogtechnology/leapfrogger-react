import * as actionType from 'App/constants/actionsType';

const initialState = {
  isValid: false,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionType.VALIDATE_EMAIL:
    console.log('000x1x1x1x1x1x1x');    
      return {
        ...state,
        isValid: true,
      };
    
    default:
      return state;
  }
};

export default user;
