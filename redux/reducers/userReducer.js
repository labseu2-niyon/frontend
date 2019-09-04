// import { types } from '../userConstants';

// const initialState = {
//   loading: false,
//   error: null,
//   message: '',
// };

// export const userReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.UPDATE_PASSWORD_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case types.UPDATE_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         message: payload,
//       };
//     case types.UPDATE_PASSWORD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: payload,
//       };

//     default:
//       return state;
//   }
// };

// old reducers

// case types.UPDATE_USER_PROFILE_REQUEST:
//   return {
//     ...state,
//     loading: true,
//   };
// case types.UPDATE_USER_PROFILE_SUCCESS:
//   return {
//     ...state,
//     loading: false,
//     user: [...state.user, payload],
//   };
// case types.UPDATE_USER_PROFILE_FAILURE:
//   return {
//     ...state,
//     loading: false,
//     error: payload,
//   };

// case types.UPLOAD_USER_IMAGE_REQUEST:
//   return {
//     ...state,
//     loading: true,
//   };
// case types.UPLOAD_USER_IMAGE_SUCCESS:
//   return {
//     ...state,
//     loading: false,
//     user: [...state.user, payload],
//   };
// case types.UPLOAD_USER_IMAGE_FAILURE:
//   return {
//     ...state,
//     loading: false,
//     error: payload,
//   };

// case types.FETCH_ALL_USERS_REQUEST:
//   return {
//     ...state,
//     loading: true,
//   };
// case types.FETCH_ALL_USERS_SUCCESS:
//   return {
//     ...state,
//     loading: false,
//     usersAll: [...state.usersAll, payload],
//   };
// case types.FETCH_ALL_USERS_FAILURE:
//   return {
//     ...state,
//     loading: false,
//     error: payload,
//   };

// case types.CHECK_USER_PROFILE_REQUEST:
//   return {
//     ...state,
//     loading: true,
//   };
// case types.CHECK_USER_PROFILE_SUCCESS:
//   return {
//     ...state,
//     loading: false,
//     user: [...state.user, payload],
//   };
// case types.CHECK_USER_PROFILE_FAILURE:
//   return {
//     ...state,
//     checkingUserInfo: false,
//     error: payload,
//   };
