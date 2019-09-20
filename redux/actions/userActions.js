import axiosWithAuth from '../axios';
import { types } from '../userConstants';

import { getUrl } from './utils';

export const fetchUser = (username) => (dispatch) => {
  dispatch({
    type: types.FETCH_USER_REQUEST,
  });
  axiosWithAuth()
    .get(`${getUrl()}/user/${username}/profile`)
    .then((res) => {
      dispatch({
        type: types.FETCH_USER,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_USER_FAIL,
        payload: error.message,
      });
    });
};

export const updatePassword = (username, body) => (dispatch) => {
  axiosWithAuth()
    .patch(`${getUrl()}/user/${username}/password`, body)
    .then((res) => {
      dispatch({
        type: types.UPDATE_PASSWORD_SUCCESS,
        payload: res.data.status,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.UPDATE_PASSWORD_FAILURE,
        payload: error.response.status,
      });
    });
};

// export const updateUserProfile = (username, existingUser) => dispatch => {
//   dispatch({ type: types.UPDATE_USER_PROFILE_REQUEST });
//   axios
//     .patch(`${_BASE_URL}/${username}/profile`, existingUser)
//     .then(res => {
//       dispatch({
//         type: types.UPDATE_USER_PROFILE_SUCCESS,
//         payload: res.data
//       });
//       // (res.data);
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
  dispatch({ type: types.FETCH_ALL_CONNECTIONS_REQUEST });
  // spinner
  axiosWithAuth()
    .get(`${getUrl()}/user/${user}/users`)
    .then((res) => {
      dispatch({
        type: types.FETCH_ALL_CONNECTIONS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ALL_CONNECTIONS_FAILURE,
        payload: error.message,
      });
    });
};

export const fetchAllUsers = (user) => (dispatch) => {
  dispatch({ type: types.FETCH_ALL_USERS_REQUEST });
  // spinner
  axiosWithAuth()
    .get(`${getUrl()}/user/${user}/users`)
    .then((res) => {
      dispatch({
        type: types.FETCH_ALL_USERS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ALL_USERS_FAILURE,
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

export const createConnection = ({ senderUserId, requestUserId }) => (dispatch) => {
  dispatch({ type: types.CREATE_CONNECTION_REQUEST });

  const senderId = parseInt(senderUserId, 10);

  axiosWithAuth()
    .post(`${getUrl()}/connection`, {
      senderUserId: senderId,
      requestUserId,
    })
    .then((res) => {
      dispatch({
        type: types.CREATE_CONNECTION_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.CREATE_CONNECTION_FAILURE,
        payload: error.message,
      });
    });
};

export const fetchConnection = (id) => (dispatch) => {
  dispatch({ type: types.FETCH_CONNECTION_REQUEST });
  // spinner
  axiosWithAuth().get(`${getUrl()}/connection/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: types.FETCH_CONNECTION_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: types.FETCH_CONNECTION_FAILURE,
        payload: error.message,
      });
    });
};

export const fetchAllConnections = (id) => (dispatch) => {
  dispatch({ type: types.FETCH_ALL_CONNECTIONS_REQUEST });
  // spinner
  axiosWithAuth().get(`${getUrl()}/connection/${id}/accepted`)
    .then((res) => {
      dispatch({
        type: types.FETCH_ALL_CONNECTIONS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ALL_CONNECTIONS_FAILURE,
        payload: error.message,
      });
    });
};

export const fetchReceivedConnections = (id) => (dispatch) => {
  dispatch({ type: types.FETCH_RECEIVED_CONNECTIONS_REQUEST });
  // spinner
  axiosWithAuth().get(`${getUrl()}/connection/${id}/requests`)
    .then((res) => {
      dispatch({
        type: types.FETCH_ALL_CONNECTIONS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_ALL_CONNECTIONS_FAILURE,
        payload: error.message,
      });
    });
};