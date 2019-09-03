import { types } from '../authConstants';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
  emailData: [],
  locationData: [],
  profileData: [],
  userTypeData: [],
  socialData: [],
  token: null,
  message: '',
};

export const authReducer = (state = initialState, { type, payload }) => {
  // ========================REGISTER USER WITH EMAIL==================
  switch (type) {
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.SET_EMAIL_DATA:
      return {
        ...state,
        emailData: payload,
        error: null,
        loading: false,
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    //= =======================ADDED USER INFORMATION======================
    case types.USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        // payload here
        error: null,
      };
    case types.USER_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case types.SET_LOCATION_DATA:
      return {
        ...state,
        locationData: payload,
      };

    case types.SET_USER_TYPE:
      return {
        ...state,
        userTypeData: payload,
      };

    case types.SET_PROFILE_DATA:
      return {
        ...state,
        profileData: payload,
      };

    case types.SET_SOCIAL_MEDIA_DATA:
      return {
        ...state,
        socialData: payload,
      };

    case types.LOG_IN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        message: payload.message,
        loading: false,
      };
    case types.LOG_IN_USER_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case types.LOG_OUT_USER:
      return {
        ...state,
        token: null,
      };

    case types.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case types.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};

// Pascal's Reducers

// export default (state, action) => {
//   switch (type) {

//     case types.RESET_PASSWORD_REQUEST:
//       return {
//         ...state,
//         loading: true
//       };
//     case types.RESET_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         message: payload
//       };
//     case types.RESET_PASSWORD_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         errorMessage: payload
//       };

//     case types.UPDATE_USER_PROFILE_REQUEST:
//       return {
//         ...state,
//         loading: true
//       };
//     case types.UPDATE_USER_PROFILE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         user: [...state.user, payload]
//         // message: payload,
//       };
//     case types.UPDATE_USER_PROFILE_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         errorMessage: payload
//       };
//   }
// };
