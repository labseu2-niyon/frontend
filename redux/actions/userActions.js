import axiosWithAuth from '../axios';
import { actionTypes } from '../userConstants';

const _BASE_URL = 'https://niyon-dev.herokuapp.com/api';

// export const updatePassword = (props) => (dispatch) => {
//   dispatch({ type: types.UPDATE_PASSWORD_REQUEST });
//   axios
//     .patch(`${_BASE_URL}/user/newpassword?token=${props.token}`, {
//       data: { password: props.password },
//     })
//     .then((res) => {
//       dispatch({
//         type: types.UPDATE_PASSWORD_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((error) => {
//       dispatch({
//         type: types.UPDATE_PASSWORD_FAILURE,
//         payload: error.message,
//       });
//     });
// };

// export const updateUserProfile = (username, existingUser) => dispatch => {
//   dispatch({ type: types.UPDATE_USER_PROFILE_REQUEST });
//   axios
//     .patch(`${_BASE_URL}/${username}/profile`, existingUser)
//     .then(res => {
//       dispatch({
//         type: types.UPDATE_USER_PROFILE_SUCCESS,
//         payload: res.data
//       });
//       // console.log(res.data);
//     })
//     .catch(error => {
//       dispatch({
//         type: types.UPDATE_USER_PROFILE_FAILURE,
//         payload: error.message
//       });
//     });
// };

// export const uploadUserImage = (username, file) => dispatch => {
//   dispatch({ type: types.UPLOAD_USER_IMAGE_REQUEST });
//   axios
//     .patch(`${_BASE_URL}/${username}/image/upload`, file)
//     .then(res => {
//       dispatch({
//         type: types.UPLOAD_USER_IMAGE_SUCCESS,
//         payload: res.data
//       });
//       // window.location = '/user/profile';
//     })
//     .catch(error => {
//       dispatch({
//         type: types.UPLOAD_USER_IMAGE_FAILURE,
//         payload: error.message
//       });
//     });
// };

export const fetchAllConnections = (user) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ALL_CONNECTIONS_REQUEST });
  // spinner
  axiosWithAuth()
    .get(`${_BASE_URL}/user/${user}/users`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: actionTypes.FETCH_ALL_CONNECTIONS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: actionTypes.FETCH_ALL_CONNECTIONS_FAILURE,
        payload: error.message,
      });
    });
};

export const fetchAllUsers = (user) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ALL_USERS_REQUEST });
  // spinner
  axiosWithAuth()
    .get(`${_BASE_URL}/user/${user}/users`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: actionTypes.FETCH_ALL_USERS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: actionTypes.FETCH_ALL_USERS_FAILURE,
        payload: error.message,
      });
    });
};

// export const checkUserProfile = username => dispatch => {
//   dispatch({ type: types.CHECK_USER_PROFILE_REQUEST });
//   axios
//     .get(`${_BASE_URL}/${username}`)
//     .then(res => {
//       dispatch({
//         type: types.CHECK_USER_PROFILE_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: types.CHECK_USER_PROFILE_FAILURE,
//         payload: error.message
//       });
//     });
// };
