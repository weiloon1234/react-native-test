import { APP_LOADING, APP_LOADED } from "../actionTypes";

const initialState = {
  loading: true,
};

export default appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return Object.assign({}, state, {
        loading: true
      });
    case APP_LOADED:
      return Object.assign({}, state, {
        loading: false
      });
    default:
      return state;
  }
};