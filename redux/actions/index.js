import axios from 'axios';
import { actionTypes } from '../constants';

const _BASE_URL = 'https://niyonapp.com';

export const incrementCount = () => ({ type: actionTypes.INCREMENT });
export const decrementCount = () => ({ type: actionTypes.DECREMENT });
export const resetCount = () => ({ type: actionTypes.RESET });

export const registerUser = (newUser) => (dispatch) => {
  dispatch({ type: actionTypes.REGISTER_USER_REQUEST });
  // spinner
  axios
    .post(`${_BASE_URL}/auth/signup`, newUser)
    .then(() => {
      dispatch({
        type: actionTypes.REGISTER_USER_SUCCESS,
        // payload: res.data.token,
      });
      // window.localStorage.setItem('token', res.data.token);
      // window.location = '/user/dashboard';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.REGISTER_USER_FAILURE,
        payload: error.message,
      });
    });
};

export const logInUser = (existingUser) => (dispatch) => {
  dispatch({ type: actionTypes.LOG_IN_USER_REQUEST });
  // spinner
  axios
    .post(`${_BASE_URL}/auth/login`, existingUser)
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
      // window.location = '/user/dashboard';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.LOG_IN_USER_FAILURE,
        payload: error.message,
      });
    });
};

export const resetPassword = (email) => (dispatch) => {
  dispatch({ type: actionTypes.RESET_PASSWORD_REQUEST });
  // spinner
  axios
    .post(`${_BASE_URL}/auth/reset-password`, email)
    .then(() => {
      dispatch({
        type: actionTypes.RESET_PASSWORD_SUCCESS,
      });
      // window.location = '/auth/email-sent';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.RESET_PASSWORD_FAILURE,
        payload: error.message,
      });
    });
};

export const updateUserProfile = (username, existingUser) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_USER_PROFILE_REQUEST });
  // spinner
  axios
    .patch(`${_BASE_URL}/user/${username}`, existingUser)
    .then((res) => {
      dispatch({
        type: actionTypes.UPDATE_USER_PROFILE_SUCCESS,
        payload: res.data,
      });
      // console.log(res.data);
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.UPDATE_USER_PROFILE_FAILURE,
        payload: error.message,
      });
    });
};

export const updatePassword = (password) => (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PASSWORD_REQUEST });
  // spinner
  axios
    .patch(`${_BASE_URL}/auth/new-password`, password)
    .then(() => {
      dispatch({
        type: actionTypes.UPDATE_PASSWORD_SUCCESS,
      });
      // window.location = '/user/profile';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.UPDATE_PASSWORD_FAILURE,
        payload: error.message,
      });
    });
};

export const uploadUserImage = (username, file) => (dispatch) => {
  dispatch({ type: actionTypes.UPLOAD_USER_IMAGE_REQUEST });
  // spinner
  axios
    .patch(`${_BASE_URL}/user/${username}/upload/image`, file)
    .then(() => {
      dispatch({
        type: actionTypes.UPLOAD_USER_IMAGE_SUCCESS,
      });
      // window.location = '/user/profile';
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.UPLOAD_USER_IMAGE_FAILURE,
        payload: error.message,
      });
    });
};

export const fetchAllUsers = () => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ALL_USERS_REQUEST });
  // spinner
  axios
    .get(`${_BASE_URL}/users`)
    .then(() => {
      dispatch({
        type: actionTypes.FETCH_ALL_USERS_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.FETCH_ALL_USERS_FAILURE,
        payload: error.message,
      });
    });
};

export const checkUserProfile = (username) => (dispatch) => {
  dispatch({ type: actionTypes.CHECK_USER_PROFILE_REQUEST });
  // spinner
  axios
    .get(`${_BASE_URL}/users/${username}`)
    .then(() => {
      dispatch({
        type: actionTypes.CHECK_USER_PROFILE_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.CHECK_USER_PROFILE_FAILURE,
        payload: error.message,
      });
    });
};
