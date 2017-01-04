import * as types from '../config/actionTypes';
const initialState = {
	isLoggedIn: false,
	user: {}
};

function loginState(state = initialState, action) {
	console.log("login state is all right", state)
	switch (action.type) {
		case types.USER_LOGIN_SUCCESS:
			return  {
				...state,
				user: action.payload,
				isLoggedIn: true
			}
		case types.USER_LOGOUT:
			return {
				...state,
				user: null,
				isLoggedIn: false
			}
		default:
			return state;
	}
}

export default loginState