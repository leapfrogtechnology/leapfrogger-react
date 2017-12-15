import * as actionType from 'App/constants/actionsType';

const initialState = {
  departments: [],
}

const department = (state = initialState, action) => {
  switch (action.type) {
    case actionType.DEPARTMENT_LIST:
      return {
        ...state,
        departments: action.departments,
      }   
    
    case actionType.LOGOUT:
      return {
        ...state,
        departments: [],
      }
      
    default:
      return state;
  }
};


export default department;
