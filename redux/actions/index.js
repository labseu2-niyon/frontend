import axios from 'axios';
import { actionTypes } from '../constants';

const _BASE_URL = 'https://niyonapp.com/';

export const incrementCount = () => ({ type: actionTypes.INCREMENT });
export const decrementCount = () => ({ type: actionTypes.DECREMENT });
export const resetCount = () => ({ type: actionTypes.RESET });

export const registerUser = (newUser) => (dispatch) => {
  dispatch({ type: actionTypes.REGISTER_USER_REQUEST });
  console.log('registering user...');
  axios
    .post(`${_BASE_URL}auth/signup`, newUser)
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

export const logInUser = (existingUser) => (dispatch) => {
  dispatch({ type: actionTypes.LOG_IN_USER_REQUEST });
  console.log('logging in user...');
  axios
    .post(`${_BASE_URL}auth/login`, existingUser)
    .then((res) => {
      dispatch({
        type: actionTypes.LOG_IN_USER_SUCCESS,
        payload: {
          // token: res.data.token,
          message: res.data.message,
          // id: res.data.id,
        },
      });
      // window.localStorage.setItem('user', JSON.stringify(res.data));
      // console.log(res.data.token);
      console.log(res.data.message);
      // window.location = '/user/dashboard';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.LOG_IN_USER_FAILURE,
        payload: error.message,
      });
      console.log(error.message);
    });
};

export const resetPassword = (email) => (dispatch) => {
  dispatch({ type: actionTypes.RESET_PASSWORD_REQUEST });
  console.log('registering user...');
  axios
    .post(`${_BASE_URL}auth/reset-password`, email)
    .then((res) => {
      dispatch({
        type: actionTypes.RESET_PASSWORD_SUCCESS,
      });
      console.log(res);
      // window.location = '/auth/email-sent';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESET_PASSWORD_FAILURE,
        payload: error.message,
      });
      console.log(error.message);
    });
};

export const updateUserProfile = (username, existingUser) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_USER_PROFILE_REQUEST });
  console.log('updating user profile...');
  axios
    .put(`${_BASE_URL}user/${username}`, existingUser)
    .then((res) => {
      dispatch({ type: actionTypes.UPDATE_USER_PROFILE_SUCCESS, payload: res.data });
      // console.log(res.data);
    })
    .catch((error) => {
      dispatch({ type: actionTypes.UPDATE_USER_PROFILE_FAILURE, payload: error.message });
      console.log(error.message);
    });
};
