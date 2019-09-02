import axios from 'axios';
import Router from 'next/router';
import nookies from 'nookies';
import { types } from '../authConstants';

const _BASE_URL = 'https://niyon-dev.herokuapp.com/api';

const startLoading = () => ({
  type: types.START_LOADING,
});

const stopLoading = () => ({ type: types.STOP_LOADING });

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

export const setClientState = (clientState) => ({
  type: types.SET_CLIENT_STATE,
  payload: clientState,
});

export const logInUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: types.LOG_IN_USER_REQUEST });
  axios
    .post(`${_BASE_URL}/user/login`, { email, password })
    .then((res) => {
      dispatch({
        type: types.LOG_IN_USER_SUCCESS,
        payload: {
          token: res.data.data.token,
          message: res.data.data.message,
        },
      });
      nookies.set({}, 'token', res.data.data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      Router.push('/');
    })
    .catch((error) => {
      dispatch({
        type: types.LOG_IN_USER_FAILURE,
        payload: error.message,
      });
    });
};

// import axios from 'axios';
// import { actionTypes } from '../constants';

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
