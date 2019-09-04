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
        emailData: payload.data,
        token: payload.token,
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
        loading: true, // just for testing the endpoint
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
    //= ==============================perist Location data from the User======
    case types.SET_LOCATION_DATA:
      return {
        ...state,
        locationData: payload,
      };
    //= ==============================perist User Type data===================
    case types.SET_USER_TYPE:
      return {
        ...state,
        userTypeData: payload,
      };
    //= ==============================perist Profile data===================
    case types.SET_PROFILE_DATA:
      return {
        ...state,
        profileData: payload,
      };
    //= ==============================perist Social Media data===================
    case types.SET_SOCIAL_MEDIA_DATA:
      return {
        ...state,
        socialData: payload,
      };
    //= ==============================LOGIN ACTION TYPES===================
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
    // ========================LOG OUT ACTION TYPES==================
    case types.LOG_OUT_USER:
      return {
        ...state,
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
    // ========================RESET PASSWORD ACTION TYPES==================
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload,
      };
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
