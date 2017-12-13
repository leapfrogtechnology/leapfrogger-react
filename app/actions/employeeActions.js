import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';

export const groupEmployeesOnDepartmentBasis = (groupedEmployees) => {
  return {
    type: ActionType.GROUP_EMPLOYEES_DEPARTMENT_BASIS,
    groupedEmployees
  }
}

export const myProfileInfo = (myProfile) => {
  return {
    type: ActionType.MY_PROFILE,
    myProfile
  }
}

export const favoriteTheEmployee = (favoriteEmployee) => {
  return {
    type: ActionType.FAVORITE_EMPLOYEE,
    favoriteEmployee: favoriteEmployee
  }
}
