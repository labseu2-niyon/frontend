// import axios from 'axios';
// import { actionTypes } from '../constants';

// const _BASE_URL = 'https://niyon-dev.herokuapp.com/';

// export const updateUserProfile = (username, existingUser) => dispatch => {
//   dispatch({ type: actionTypes.UPDATE_USER_PROFILE_REQUEST });
//   // spinner
//   axios
//     .patch(`${_BASE_URL}/${username}/profile`, existingUser)
//     .then(res => {
//       dispatch({
//         type: actionTypes.UPDATE_USER_PROFILE_SUCCESS,
//         payload: res.data
//       });
//       // console.log(res.data);
//     })
//     .catch(error => {
//       dispatch({
//         type: actionTypes.UPDATE_USER_PROFILE_FAILURE,
//         payload: error.message
//       });
//     });
// };

// export const updatePassword = password => dispatch => {
//   dispatch({ type: actionTypes.UPDATE_PASSWORD_REQUEST });
//   // spinner
//   axios
//     .patch(`${_BASE_URL}/newpassword`, password)
//     .then(res => {
//       dispatch({
//         type: actionTypes.UPDATE_PASSWORD_SUCCESS,
//         payload: res.data
//       });
//       // window.location = '/user/profile';
//     })
//     .catch(error => {
//       dispatch({
//         type: actionTypes.UPDATE_PASSWORD_FAILURE,
//         payload: error.message
//       });
//     });
// };

// export const uploadUserImage = (username, file) => dispatch => {
//   dispatch({ type: actionTypes.UPLOAD_USER_IMAGE_REQUEST });
//   // spinner
//   axios
//     .patch(`${_BASE_URL}/${username}/image/upload`, file)
//     .then(res => {
//       dispatch({
//         type: actionTypes.UPLOAD_USER_IMAGE_SUCCESS,
//         payload: res.data
//       });
//       // window.location = '/user/profile';
//     })
//     .catch(error => {
//       dispatch({
//         type: actionTypes.UPLOAD_USER_IMAGE_FAILURE,
//         payload: error.message
//       });
//     });
// };

// export const fetchAllUsers = () => dispatch => {
//   dispatch({ type: actionTypes.FETCH_ALL_USERS_REQUEST });
//   // spinner
//   axios
//     .get(`${_BASE_URL}/users`)
//     .then(res => {
//       dispatch({
//         type: actionTypes.FETCH_ALL_USERS_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: actionTypes.FETCH_ALL_USERS_FAILURE,
//         payload: error.message
//       });
//     });
// };

// export const checkUserProfile = username => dispatch => {
//   dispatch({ type: actionTypes.CHECK_USER_PROFILE_REQUEST });
//   // spinner
//   axios
//     .get(`${_BASE_URL}/${username}`)
//     .then(res => {
//       dispatch({
//         type: actionTypes.CHECK_USER_PROFILE_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: actionTypes.CHECK_USER_PROFILE_FAILURE,
//         payload: error.message
//       });
//     });
// };
