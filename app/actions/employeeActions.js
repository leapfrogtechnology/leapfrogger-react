import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';

export const employeeList = (employees) => {
  console.log('-----', employees)
  return {
    type: ActionType.EMPLOYEES_LIST,
    employees
  }
}

export const groupEmployeesOnDepartmentBasis = (groupedEmployees) => {
  return {
    type: ActionType.GROUP_EMPLOYEES_DEPARTMENT_BASIS,
    groupedEmployees
  }
}

export const favoriteTheEmployee = (favoriteEmployee) => {
  return {
    type: ActionType.FAVORITE_EMPLOYEE,
    favoriteEmployee: favoriteEmployee
  }
}
