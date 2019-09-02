import axios from 'axios';
import Router from 'next/router';
import { types } from '../authConstants';

const _BASE_URL = 'https://niyon-dev.herokuapp.com/api';

const startLoading = () => ({
  type: types.START_LOADING,
});

const stopLoading = () => ({
  type: types.STOP_LOADING,
});

export const googleSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Google endpoint request');
  dispatch(stopLoading());
};

export const facebookSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Facebook endpoint request');
  dispatch(stopLoading());
};

export const twitterSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Twitter endpoint request');
  dispatch(stopLoading());
};

export const githubSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Github endpoint request');
  dispatch(stopLoading());
};

export const emailSignUp = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Email endpoint request', userData);
  dispatch(stopLoading());
};

export const emailSignup = (data) => ({
  type: types.SET_EMAIL_DATA,
  payload: data,
});

export const locationData = (data) => ({
  type: types.SET_LOCATION_DATA,
  payload: data,
});

export const userType = (data) => ({
  type: types.SET_USER_TYPE,
  payload: data,
});

export const profileData = (data) => ({
  type: types.SET_PROFILE_DATA,
  payload: data,
});

export const socialData = (data) => ({
  type: types.SET_SOCIAL_MEDIA_DATA,
  payload: data,
});

export const logInUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: types.LOG_IN_USER_REQUEST });
  // spinner

  axios
    .post(`${_BASE_URL}/user/login`, { email, password })
    .then((res) => {
      dispatch({
        type: types.LOG_IN_USER_SUCCESS,
        payload: {
          token: res.data.token,
          message: res.data.message,
        },
      });
      localStorage.setItem('user', JSON.stringify(res.data));
    })
    .catch((error) => {
      dispatch({
        type: types.LOG_IN_USER_FAILURE,
        payload: error.message,
      });
    });
};

export const logOutUser = () => (dispatch) => {
  dispatch({ type: types.LOG_OUT_USER_REQUEST });
  Router.push('/');
};

// export const registerUser = newUser => dispatch => {
//   dispatch({ type: actionTypes.REGISTER_USER_REQUEST });
//   // spinner
//   axios
//     .post(`${_BASE_URL}/signup`, newUser)
//     .then(res => {
//       dispatch({
//         type: actionTypes.REGISTER_USER_SUCCESS,
//         payload: res.data,
//         // payload: res.data.token,
//       });
//       // window.localStorage.setItem('token', res.data.token);
//       // window.location = '/user/dashboard';
//     })
//     .catch(error => {
//       dispatch({
//         type: actionTypes.REGISTER_USER_FAILURE,
//         payload: error.message,
//       });
//     });
// };

// export const resetPassword = email => dispatch => {
//   dispatch({ type: actionTypes.RESET_PASSWORD_REQUEST });
//   // spinner
//   axios
//     .post(`${_BASE_URL}/resetpassword`, email)
//     .then(res => {
//       dispatch({
//         type: actionTypes.RESET_PASSWORD_SUCCESS,
//         payload: res.data,
//       });
//       // window.location = '/auth/email-sent';
//     })
//     .catch(error => {
//       dispatch({
//         type: actionTypes.RESET_PASSWORD_FAILURE,
//         payload: error.message,
//       });
//     });
// };
