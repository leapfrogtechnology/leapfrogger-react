import { uri } from 'App/config/uri';
import * as util from 'App/utils/dataNormalization';
import * as Resource from 'App/utils/networkResource';
import * as ActionType from 'App/constants/actionsType';

export const myProfileInfo = (myProfile) => {
  return {
    type: ActionType.MY_PROFILE,
    myProfile
  }
}

export const validateLFEmail = (validationResponse) => {
  return {
    type: ActionType.VALIDATE_EMAIL,
    validationResponse
  }
}
