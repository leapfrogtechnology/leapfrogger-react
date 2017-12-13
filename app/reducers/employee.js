import * as actionType from 'App/constants/actionsType';

const initialState = {
  employees: [],
  groupedEmployees: [],
  favoriteEmployees: [],
}

const employee = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GROUP_EMPLOYEES_DEPARTMENT_BASIS:
      return {
        ...state,
        groupedEmployees: action.groupedEmployees
      }

    case actionType.FAVORITE_EMPLOYEE:
      return {
        ...state,
        favoriteEmployees: action.favoriteEmployee
      }

    default:
      return state;
  }
};

export default employee;
