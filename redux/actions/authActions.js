import axios from 'axios';
import nookies from 'nookies';
import Router from 'next/router';
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

export const emailSignup = (data) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  // console.log('SignUp data: ', data);
  return axios
    .post(`${_BASE_URL}/user/signup`, data)
    .then((res) => {
      console.log(res.data.data);
      dispatch({ type: types.SET_EMAIL_DATA, payload: data });
      return res.data.status;
    })
    .catch((err) => {
      dispatch({
        type: types.REGISTER_USER_FAILURE,
        payload: err.response.data.message,
      });
      return err.response.data.message;
    });
  // type: types.SET_EMAIL_DATA -instead of- type.REGISTE_USER_SUCCESS
  // payload: data
};

export const userProfileInfo = (data, user) => (dispatch) => {
  console.log(data, user);
  dispatch({ type: types.USER_INFO_REQUEST });
  return axios
    .post(`${_BASE_URL}/user/${user}/profile`, data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.USER_INFO_SUCCESS, payload: res.data });
      // return status code in case of success
      return res.data.status;
    })
    .catch((err) => {
      dispatch({
        type: types.USER_INFO_FAIL,
        payload: err.response.data.message,
      });
      return err.response.status;
    });
};

export const logInUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: types.LOG_IN_USER_REQUEST });
  return axios
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

      return res.data.status;
    })
    .catch((error) => {
      dispatch({
        type: types.LOG_IN_USER_FAILURE,
        payload: error.message,
      });
    });
};

export const logOutUser = () => (dispatch) => {
  dispatch({ type: types.LOG_OUT_USER });
  nookies.destroy({}, 'token');
  Router.push('/auth/login');
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
