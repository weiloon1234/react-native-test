import { USER_LOADING, USER_LOADED, USER_FAILED } from '../actionTypes';
const initialState = {
  username: "",
  password: "",
  user: {}
};

export default userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return Object.assign({}, state, {
        loading: true,
        user: {},
      });
    case USER_LOADED:
      return Object.assign({}, state, {
        loading: false,
        user: action.data
      });
    case USER_FAILED:
      return Object.assign({}, state, {
        loading: false,
      });
    default:
      return state
  }
}