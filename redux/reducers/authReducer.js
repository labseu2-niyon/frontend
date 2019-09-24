/* eslint-disable import/prefer-default-export */
import { types } from '../authConstants';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
  emailData: [],
  locationId: 0,
  profileData: [],
  userTypeData: 0,
  socialData: [],
  userNameData: [],
  allJobs: [],
  allMentorOptions: [],
  requestId: null,
  connectionId: null,
  token: null,
  message: ''
};

export const authReducer = (
  state = initialState,
  { type, payload, payload2 }
) => {
  // ========================REGISTER USER WITH EMAIL==================
  switch (type) {
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.SET_EMAIL_DATA:
      return {
        ...state,
        emailData: payload.data,
        token: payload.token,
        error: null,
        loading: false
      };
    case types.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    //= =======================ADDED USER INFORMATION======================
    case types.USER_INFO_REQUEST:
      return {
        ...state,
        loading: true, // just for testing the endpoint
        error: null
      };
    case types.USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        // payload here
        error: null
      };
    case types.USER_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    //= ==============================perist Location data from the User======
    case types.SET_LOCATION_DATA:
      return {
        ...state,
        locationId: payload,
        loading: false
      };
    case 'SAVE_LOCATION_ID':
      return {
        ...state,
        locationId: payload
      };

    case types.SET_USER_NAME:
      return {
        ...state,
        userNameData: payload
      };
    //= ==============================perist User Type data===================
    case types.START_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.SET_USER_TYPE:
      return {
        ...state,
        userTypeData: payload,
        loading: false
      };
    case types.STOP_LOADING:
      return {
        ...state,
        loading: false,
        error: null
      };
    //= ==============================perist Profile data===================
    case types.SET_PROFILE_DATA:
      return {
        ...state,
        profileData: payload
      };
    //= ===============================Get All JOBS==========================
    case types.GET_ALL_JOBS:
      return {
        ...state,
        allJobs: payload
      };
    //= ===============================GET All Mentors options ==============
    case types.GET_ALL_MENTOR_TYPES:
      return {
        ...state,
        allMentorOptions: payload
      };
    //= ===============================SAVE current request id=================
    case 'SAVE_CURRENT_REQWEST_ID':
      return {
        ...state,
        requestId: payload,
        connectionId: payload2
      };
    //= ==============================perist Social Media data===================
    case types.SET_SOCIAL_MEDIA_DATA:
      return {
        ...state,
        socialData: payload,
        loading: false
      };
    //= ==============================LOGIN ACTION TYPES===================
    case types.LOG_IN_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        message: payload.message,
        loading: false
      };
    case types.LOG_IN_USER_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    // ========================LOG OUT ACTION TYPES==================
    case types.LOG_OUT_USER:
      return {
        ...state,
        userInfo: null,
        loading: false,
        error: null,
        emailData: [],
        locationId: 0,
        profileData: [],
        userTypeData: 0,
        socialData: [],
        token: null,
        userNameData: [],
        allJobs: [],
        allMentorOptions: [],
        connectionId: null,
        message: ''
      };
    // ========================RESET PASSWORD ACTION TYPES==================
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload
      };
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    // ========================CHANGE PASSWORD ACTION TYPES==================
    case types.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload
      };
    case types.CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case types.SAVE_TOKEN:
      return {
        ...state,
        token: payload.token,
        emailData: { ...state.emailData, username: payload.username }
      };
    case types.STORE_TOKEN:
      return {
        ...state,
        token: payload.token,
        emailData: { ...state.emailData, username: payload.username }
      };
    default:
      return state;
  }
};
