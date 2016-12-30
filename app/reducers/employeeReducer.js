import { LOADED_EMPLOYEES } from '../config/actionTypes';
const initialState = {
	isLoading: true,
	employees: []
}

function employeeState(state = initialState, action) {
	switch(action.type) {
		case LOADED_EMPLOYEES:
			return Object.assign({}, state, {...state, employees: action.payload.employees, isLoading: action.payload.isLoading})

		default:
			return state;
	}
}

export default employeeState;