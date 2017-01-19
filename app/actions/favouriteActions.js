import { MAKE_FAVOURITE, REMOVE_FAVOURITE } from '../config/actionTypes'

export function makeFavourite(employeeId) {
	return {
		type: MAKE_FAVOURITE,
		employeeId: parseInt(employeeId)
	}
}

export function removeFavourite(employeeId){
	return {
		type: REMOVE_FAVOURITE,
		employeeId: parseInt(employeeId)
	}
}