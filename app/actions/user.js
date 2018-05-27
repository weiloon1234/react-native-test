import { USER_LOADING, USER_LOADED, USER_FAILED, APP_LOADING, APP_LOADED } from "../actionTypes";
import axios from 'axios';
import Config from '../config';

export function userLogin(username, password) {
  return (dispatch) => {
    dispatch({type: USER_LOADING});
    axios
      .post("oauth/token", {
        username: username,
        password: password,
        client_id: Config.API_CLIENT_ID,
        client_secret: Config.API_CLIENT_SECRET,
        grant_type: 'password',
      }, {
        headers: {}
      })
      .then(response => {
        dispatch({
          type: USER_LOADED,
          data: response.data
        });
      })
      .catch(err => {
        dispatch({ type: USER_FAILED, error: err.response.data.message });
        alert(err.response.data.message);
      });
  };
}
