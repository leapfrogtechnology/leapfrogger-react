import * as actionType from 'App/constants/actionsType';

const initialState = {
  isValid: false,
  groupedEmployees: [],
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
      // console.log('11111_GROUP', action.groupedEmployees)
      return {
        ...state,
        groupedEmployees: action.groupedEmployees
      }

    default:
      return state;
  }
};

export default user;
