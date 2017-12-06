import * as ActionType from 'App/constants/actionsType';

export const loginAction = (user) => ({
  type: ActionType.LOGIN,
  user
});

export const logoutAction = () => ({
  type: ActionType.LOGOUT,
});
