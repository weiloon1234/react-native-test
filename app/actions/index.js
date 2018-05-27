import { APP_LOADING, APP_LOADED } from '../actionTypes';

export function appLoading() {
  return (dispatch) => {
    dispatch({type: APP_LOADING});
  }
}

export function appLoaded() {
  return (dispatch) => {
    dispatch({type: APP_LOADED});
  }
}