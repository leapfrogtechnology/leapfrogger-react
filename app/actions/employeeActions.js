import { LOADED_EMPLOYEES } from '../config/actionTypes';

export function loadedEmployees(payload) {
	return {
		type: LOADED_EMPLOYEES,
		payload: payload
	}
}