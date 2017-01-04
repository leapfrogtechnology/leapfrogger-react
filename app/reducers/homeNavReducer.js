import { PUSH_HOME_ROUTE, POP_HOME_ROUTE } from '../config/actionTypes'
import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'homeNav',
  routes: [{
   key: 'employeeList',
   title: 'Employees'
  }]
}

function navigationState (state = initialState, action) {
  switch (action.type) {
    
    case PUSH_HOME_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) return state
    return NavigationStateUtils.push(state, action.route)

    case POP_HOME_ROUTE:
      if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)

   default:
     return state
  
  }
}

export default navigationState
