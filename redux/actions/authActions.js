/* eslint-disable arrow-parens */
import axios from 'axios';
import nookies from 'nookies';
import Router from 'next/router';
import { types } from '../authConstants';
import axiosWithToken from '../axios';
import { getUrl } from './utils';

const startLoading = () => ({
  type: types.START_LOADING
});

const stopLoading = () => ({ type: types.STOP_LOADING });

// Action creator for persisting location data
export const locationData = data => dispatch => {
  dispatch({ type: types.START_LOADING });
  return axios
    .post(`${getUrl()}/location/getLocation`, data)
    .then(res => {
      dispatch({ type: types.SET_LOCATION_DATA, payload: res.data.data });
      return res.data.status;
    })
    .catch(() => {
      dispatch({ type: types.STOP_LOADING });
    });
};

// Action creator for persisting profile data
export const profileData = data => ({
  type: types.SET_PROFILE_DATA,
  payload: data
});

export const socialData = data => {
  Router.push('/auth/location');
  return {
    type: types.SET_USER_NAME,
    payload: data
  };
};

// Action Creator for user Choice
export const userChoise = (data, userType) => dispatch => {
  dispatch({ type: types.START_LOADING });
  axios
    .post(`${getUrl()}/${userType}/choice`, data)
    .then(res => {
      dispatch({ type: types.SET_USER_CHOISE, payload: res.data.data });
      dispatch({ type: types.STOP_LOADING });
    })
    .catch(() => {
      dispatch({ type: types.STOP_LOADING });
    });
};

// Action Creator for Signup a user with email
// body {username, email, password}
export const emailSignup = data => dispatch => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  // console.log('SignUp data: ', data);
  return axios
    .post(`${getUrl()}/user/signup`, data)
    .then(res => {
      dispatch({
        type: types.SET_EMAIL_DATA,
        payload: {
          token: res.data.data.token,
          data: res.data.data.user
        }
      });
      nookies.set({}, 'token', res.data.data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      return res.data.status;
    })
    .catch(err => {
      dispatch({
        type: types.REGISTER_USER_FAILURE,
        payload: err.response.data.message
      });

      return err.response.data.message;
    });
  // changed !! type: types.SET_EMAIL_DATA -instead of- type.REGISTE_USER_SUCCESS
};

// Action Creator for making a user a mentor/mentee {type: mentor/mentee}
// data: {locationId: String, industryId: String}
// username
// status - data that will persist in redux-resist store
export const userTypeHandler = (data, username, type, status) => dispatch => {
  dispatch({ type: types.START_LOADING });
  return axiosWithToken()
    .post(`${getUrl()}/${type}/${username}/${type}`, data)
    .then(res => {
      dispatch({ type: types.SET_USER_TYPE, payload: status });
      return res.data.status;
    })
    .catch(() => {
      dispatch({ type: types.STOP_LOADING });
    });
};

// Action Creator for getting Location Data from the Server based on the City
// data: city:String  => City and Country
export const locationRequest = data => dispatch => {
  dispatch({ type: types.START_LOADING });
  return axios
    .get(`${getUrl()}/autocomplete/${data}`)
    .then(res => {
      dispatch({ type: types.STOP_LOADING });
      return res.data.data;
    })
    .catch(() => {
      dispatch({ type: types.STOP_LOADING });
    });
};

// Action Creator for getting all the jobs type from database
export const getJobTitles = () => dispatch => {
  axios
    .get(`${getUrl()}/jobs/all`)
    .then(res => {
      dispatch({ type: types.GET_ALL_JOBS, payload: res.data.data });
    })
    .catch(() => {});
};

// Action Creator for getting Mentor type option
export const getMentorType = () => dispatch => {
  axios
    .get(`${getUrl()}/types/all`)
    .then(res => {
      dispatch({ type: types.GET_ALL_MENTOR_TYPES, payload: res.data.data });
    })
    .catch();
};

// Action Creator for updating/patch user information gather from the steps
// data: {firstName: String, lastName: String, country: String, city: String, bio: String}
// user : username
export const userProfileInfo = (data, user) => dispatch => {
  dispatch({ type: types.USER_INFO_REQUEST });
  return axiosWithToken()
    .patch(`${getUrl()}/user/${user}/profile`, data)
    .then(res => {
      dispatch({ type: types.USER_INFO_SUCCESS, payload: res.data });
      // return status code in case of success
      return res.data.status;
    })
    .catch(err => {
      dispatch({
        type: types.USER_INFO_FAIL,
        payload: err.response.data.message
      });
      return err.response.status;
    });
};

// Action Creator for upload user image to cloudinary API
// data: image in FormatData object
// user : username
export const imageUpload = (data, user) => dispatch => {
  dispatch(startLoading());
  axiosWithToken()
    .patch(`${getUrl()}/user/${user}/image/upload`, data)
    .then(() => {
      // debugger;
    })
    .catch(() => {
      // debugger;
    });
};

// Action Creator for adding social media handlers
// data: {user_id:integer, facebook: String, linkedin: String, twitter: String}
export const socialDataHandler = (data, username) => dispatch => {
  dispatch({ type: types.START_LOADING });
  return axiosWithToken()
    .post(`${getUrl()}/user/${username}/socialmedia`, data)
    .then(res => {
      dispatch({ type: types.SET_SOCIAL_MEDIA_DATA, payload: data });
      return res.data.status;
    })
    .catch(() => {
      dispatch({ type: types.STOP_LOADING });
    });
};

export const logInUser = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOG_IN_USER_REQUEST });
  return axios
    .post(`${getUrl()}/user/login`, { email, password })
    .then(res => {
      dispatch({
        type: types.LOG_IN_USER_SUCCESS,
        payload: {
          token: res.data.data.token,
          message: res.data.data.message
        }
      });
      nookies.set({}, 'token', res.data.data.token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
      return res.data;
    })
    .catch(error => {
      dispatch({
        type: types.LOG_IN_USER_FAILURE,
        payload: error.message
      });
      return error.response.data.message;
    });
};

export const logOutUser = () => dispatch => {
  dispatch({ type: types.LOG_OUT_USER });
  nookies.destroy({}, 'token', { path: '/' });
};

export const resetPassword = props => dispatch => {
  dispatch({ type: types.RESET_PASSWORD_REQUEST });
  return axios
    .post(`${getUrl()}/user/resetpassword`, { email: props.email })
    .then(res => {
      dispatch({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: res.data.data.message
      });
      Router.push('/auth/email-sent');
    })
    .catch(error => {
      dispatch({
        type: types.RESET_PASSWORD_FAILURE,
        payload: error.response.data.message
      });
      return error.response.data.message;
    });
};

export const changePassword = props => dispatch => {
  dispatch({ type: types.CHANGE_PASSWORD_REQUEST });
  return axios
    .patch(`${getUrl()}/user/newpassword?token=${props.token}`, {
      password: props.password
    })
    .then(res => {
      dispatch({
        type: types.CHANGE_PASSWORD_SUCCESS,
        payload: res.data.data
      });
      setTimeout(() => {
        Router.push('/auth/login');
      }, 2000);
      return res.data.data;
    })
    .catch(error => {
      dispatch({
        type: types.CHANGE_PASSWORD_FAILURE,
        payload: error.message
      });
    });
};

export const saveCurrentRequestId = (userId, connectionID) => ({
  type: 'SAVE_CURRENT_REQWEST_ID',
  payload: userId,
  payload2: connectionID
});

export const saveToken = (token, username) => dispatch => {
  dispatch({
    type: types.SAVE_TOKEN,
    payload: {
      token,
      username
    }
  });
  nookies.set({}, 'token', token, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/'
  });
};

export const storeToken = (token, username) => dispatch => {
  nookies.set({}, 'token', token, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/'
  });
  dispatch({
    type: types.STORE_TOKEN,
    payload: {
      token,
      username
    }
  });
};
