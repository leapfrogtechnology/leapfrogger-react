import { LOGIN } from 'App/constants/actionsType';

export const loginAction = (user) => ({
  type: LOGIN,
  user
});
