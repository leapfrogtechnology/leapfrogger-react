import {
  LOGIN,
} from './../constants/actionsType';

const initialState = {
  loggedIn: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.data,
        loggedIn: true,
      };

    default:
      return state;
  }
};

export default auth;
