import * as ActionType from 'App/constants/actionsType';
import { ActionSheetCustom } from 'react-native-actionsheet';

const initialState = {
  user: null,
  loggedIn: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        user: action.user,
        loggedIn: true,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        user: null,
        loggedIn: false,
      }
    
    default:
      return state;
  }
};

export default auth;
