import axios from 'axios';
import { actionTypes } from '../constants';

export const incrementCount = () => ({ type: actionTypes.INCREMENT });
export const decrementCount = () => ({ type: actionTypes.DECREMENT });
export const resetCount = () => ({ type: actionTypes.RESET });

export const registerUser = (newUser) => (dispatch) => {
  dispatch({ type: actionTypes.REGISTER_USER_REQUEST });
  console.log('registering user');
  axios
    .post('https://niyonapp.com/signup', newUser)
    .then((res) => {
      dispatch({
        type: actionTypes.REGISTER_USER_SUCCESS,
        // payload: res.data.token,
      });
      console.log(res);
      // window.localStorage.setItem('token', res.data.token);
      // window.location = '/user/dashboard';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.REGISTER_USER_FAILURE,
        payload: error.message,
      });
      console.log(error.message);
    });
};
