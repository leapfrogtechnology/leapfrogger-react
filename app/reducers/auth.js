import {
  LOGIN,
} from 'App/constants/actionsType';

const initialState = {
  loggedIn: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
        loggedIn: true,
      };

    default:
      return state;
  }
};

export default auth;
