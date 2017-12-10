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
    
    case actionType.EMPLOYEES_LIST:
      return {
        ...state,
        employees: action.employees
      };
    
    case actionType.MY_PROFILE:
      return {
        ...state,
        myProfile: action.myProfile
      }

    case actionType.GROUP_EMPLOYEES_DEPARTMENT_BASIS:
      return {
        ...state,
        groupedEmployees: 'xxx'
      }

    default:
      return state;
  }
};

export default user;
