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
};

export const authReducer = (state = initialState, { type, payload }) => {
  if (type === types.SET_EMAIL_DATA) {
    return {
      ...state,
      emailData: payload,
    };
  }
  if (type === types.SET_LOCATION_DATA) {
    return {
      ...state,
      locationData: payload,
    };
  }

  if (type === types.SET_USER_TYPE) {
    return {
      ...state,
      userTypeData: payload,
    };
  }
  if (type === types.SET_PROFILE_DATA) {
    return {
      ...state,
      profileData: payload,
    };
  }

  return state;
};
