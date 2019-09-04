import axios from 'axios';
import nookies from 'nookies';
import { types } from '../authConstants';
import axiosWithToken from '../axios';

const _BASE_URL = 'https://niyon-dev.herokuapp.com/api';

const startLoading = () => ({
  type: types.START_LOADING,
});

const stopLoading = () => ({ type: types.STOP_LOADING });

// Action Creator for Social Media Signup
export const linkedinSignup = () => (dispatch) => {
  dispatch(startLoading());
  // console.log('Linkedin endpoint request');
  dispatch(stopLoading());
};
export const githubSignup = () => (dispatch) => {
  dispatch(startLoading());
  // console.log('Github endpoint request');
  // axiosWithToken()
  //   .get(`${_BASE_URL}/user/auth/github`)
  //   .then((res) => {
  //     debugger;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     debugger;
  //   });
  // dispatch(stopLoading());
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

export const emailSignUp = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Email endpoint request', userData);
  dispatch(stopLoading());
};

// Action creator for persisting location data
export const locationData = (data) => ({
  type: types.SET_LOCATION_DATA,
  payload: data,
});

// Action creator for persisting profile data
export const profileData = (data) => ({
  type: types.SET_PROFILE_DATA,
  payload: data,
});

// Action Creator for Singup a user with email
// body {username, email, password}
export const emailSignup = (data) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  // console.log('SignUp data: ', data);
  return axios
    .post(`${_BASE_URL}/user/signup`, data)
    .then((res) => {
      dispatch({
        type: types.SET_EMAIL_DATA,
        payload: {
          token: res.data.data.token,
          data: res.data.data.user,
        },
      });
      nookies.set({}, 'token', res.data.data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      return res.data.status;
    })
    .catch((err) => {
      dispatch({
        type: types.REGISTER_USER_FAILURE,
        payload: err.response.data.message,
      });

      return err.response.data.message;
    });
  // changed !! type: types.SET_EMAIL_DATA -instead of- type.REGISTE_USER_SUCCESS
};

// Action Creator for making a user a mentor/mentee {type: mentor/mentee}
// data: {locationId: String, industryId: String}
// username
// status - data that will persist in redux-resist store
export const userTypeHandler = (data, username, type, status) => (dispatch) => {
  dispatch({ type: types.START_LOADING });
  return axiosWithToken()
    .post(`${_BASE_URL}/${type}/${username}/${type}`, data)
    .then((res) => {
      dispatch({ type: types.SET_USER_TYPE, payload: status });
      return res.data.status;
    })
    .catch(() => {
      dispatch({ type: types.STOP_LOADING });
    });
};

// Action Creator for updating/patch user information gather from the steps
// data: {firstName: String, lastName: String, country: String, city: String, bio: String}
// user : username
export const userProfileInfo = (data, user) => (dispatch) => {
  // console.log(data, user);
  dispatch({ type: types.USER_INFO_REQUEST });
  return axiosWithToken()
    .patch(`${_BASE_URL}/user/${user}/profile`, data)
    .then((res) => {
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

// Action Creator for upload user image to cloudinary API
// data: image in FormatData object
// user : username
export const imageUpload = (data, user) => (dispatch) => {
  dispatch(startLoading());
  axiosWithToken()
    .patch(`${_BASE_URL}/user/${user}/image/upload`, data)
    .then(() => {
      // debugger;
    })
    .catch(() => {
      // debugger;
    });
};

// Action Creator for adding social media handlers
// data: {user_id:integer, facebook: String, linkedin: String, twitter: String}
export const socialData = (data, username) => (dispatch) => {
  dispatch({ type: types.START_LOADING });
  return axiosWithToken()
    .post(`${_BASE_URL}/user/${username}/socialmedia`, data)
    .then((res) => {
      dispatch({ type: types.SET_SOCIAL_MEDIA_DATA, payload: data });
      return res.data.status;
    })
    .catch(() => {
      dispatch({ type: types.STOP_LOADING });
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
  nookies.destroy({}, 'token', { path: '/' });
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
