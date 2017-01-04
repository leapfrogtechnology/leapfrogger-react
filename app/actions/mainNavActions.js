import { CHANGE_PAGE } from '../config/actionTypes';

export function navigatePage(page) {
  return {
    type: CHANGE_PAGE,
    page: page
  }
}
