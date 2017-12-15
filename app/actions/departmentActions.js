import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';

export const departmentList = (departments) => {
  return {
    type: ActionType.DEPARTMENT_LIST,
    departments
  }    
}
