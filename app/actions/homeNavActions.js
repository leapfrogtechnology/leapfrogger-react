import { PUSH_HOME_ROUTE, POP_HOME_ROUTE } from '../config/actionTypes';

export function push (route) {
  return {
    type: PUSH_HOME_ROUTE,
    route
  }
}

export function pop () {
  return {
    type: POP_HOME_ROUTE
  }
}