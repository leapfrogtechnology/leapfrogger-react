import { CHANGE_PAGE } from '../config/actionTypes'

const routes = [
  {key: 'home', title: 'Leapfroggers'},
  {key: 'favourites', title: 'Favourites'},
  {key: 'profile', title: 'Profile'}
]

const initialState = {
  index: 0,
  routes
}

function _findIndexOfPage(key) {
  return routes.findIndex((route) => {return (route.key === key) });
}

function mainNavigationState (state = initialState, action) {
  let currentIndex = -1;

  if('page' in action){
    currentIndex = _findIndexOfPage(action.page.key);
  }

  if (action.index === state.index){
    return state;
  } 
  
  switch (action.type) {
    
    case CHANGE_PAGE:
    return {
      ...state,
      index: currentIndex
    }

   default:
     return state
  
  }
}

export default mainNavigationState