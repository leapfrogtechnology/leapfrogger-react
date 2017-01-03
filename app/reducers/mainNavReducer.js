import { CHANGE_PAGE } from '../config/actionTypes'
import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const routes = [
  {key: 'home', title: 'Leapfroggers'},
  {key: 'favourites', title: 'Favourites'},
  {key: 'profile', title: 'Profile'}
]

const initialState = {
  index: 0,
  routes
}

function mainNavigationState (state = initialState, action) {
  if (action.index === state.index){
    return state;
  } 
  
  switch (action.type) {
    
    case CHANGE_PAGE:
      return NavigationStateUtils.jumpTo(state, action.page.key)

   default:
     return state
  
  }
}

export default mainNavigationState