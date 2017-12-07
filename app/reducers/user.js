import * as actionType from 'App/constants/actionsType';

const initialState = {
  isValid: false,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionType.VALIDATE_EMAIL:
    console.log('VALIDATE_EMAIL');    
      return {
        ...state,
        isValid: true,
      };
    
    case actionType.EMPLOYEES_LIST:
    console.log('EMPLOYEES_LIST', action.employees);    
      return {
        ...state,
        employees: action.employees
      };
    
    default:
      return state;
  }
};

export default user;
