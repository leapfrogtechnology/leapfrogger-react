import * as types from '../config/actionTypes';

export function logInSuccess(user) {
	console.log("Login Success called", user)
	return {
		type: types.USER_LOGIN_SUCCESS,
		payload: user
	}
}

export function logOut() {
	console.log("Log out success")
	return {
		type: types.USER_LOGOUT,
	}
}
