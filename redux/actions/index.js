import axios from 'axios';
import { actionTypes } from '../constants';

export const incrementCount = () => ({ type: actionTypes.INCREMENT });

export const decrementCount = () => ({ type: actionTypes.DECREMENT });

export const resetCount = () => ({ type: actionTypes.RESET });

export const registerUser = (newUser) => (dispatch) => {
  dispatch({ type: actionTypes.REGISTERING_USER });
  console.log('registering user');
  axios
    .post('https://niyonapp.com/signup', newUser)
    .then((res) => {
      dispatch({ type: actionTypes.SUCCESS });
      console.log(res);
      // window.location = '/user/dashboard';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.message,
      });
      console.log(error.message);
    });
};
