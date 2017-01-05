import { LOADED_EMPLOYEES, MAKE_FAVOURITE, REMOVE_FAVOURITE } from '../config/actionTypes';
import _cloneDeep from 'lodash/cloneDeep'
const initialState = {
	isLoading: true,
	employees: []
}

function employeeState(state = initialState, action) {
	switch(action.type) {
		case LOADED_EMPLOYEES:
			return {...state, employees: action.payload.employees, isLoading: action.payload.isLoading}

		case MAKE_FAVOURITE:
			let newState = _cloneDeep(state);
			let employee = newState.employees.find((employee) => employee.empId == action.employeeId)
			employee.isFavourite = true
			return newState

		case REMOVE_FAVOURITE:
			newState = _cloneDeep(state);
			employee = newState.employees.find((employee) => employee.empId == action.employeeId)
			employee.isFavourite = false
			return newState

		default:
			return state;
	}
}

export default employeeState;
