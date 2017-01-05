import { MAKE_FAVOURITE, REMOVE_FAVOURITE } from '../config/actionTypes'

// const favourites = new Set();
const favourites = []

function favouriteState(state = favourites, action) {
	switch(action.type){

		case MAKE_FAVOURITE:
			if(state.includes(action.employeeId)){
				return state
			}
			return [...state, action.employeeId]

		case REMOVE_FAVOURITE:
			let index = state.indexOf(action.employeeId)
			return [...state.slice(0, index), ...state.slice(index + 1)]

		default:
			return state
	}
}

export default favouriteState
