import { types } from '../userConstants';

const initialState = {
  error: false,
  message: '',
  user: null,
  passwordStatus: true,
  queryingDatabase: false,
  errorMessage: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_USER:
      return {
        ...state,
        user: payload,
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        error: true,
      };
    case types.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordStatus: payload,
      };
    case types.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        error: true,
        passwordStatus: payload,
      };
    case types.UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case types.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        user: [...state.user, payload],
        // message: action.payload,
      };
    case types.UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: payload,
      };

    case types.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };

    case types.UPLOAD_USER_IMAGE_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case types.UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        user: [...state.user, payload],
      };
    case types.UPLOAD_USER_IMAGE_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: payload,
      };

    case types.FETCH_ALL_USERS_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        usersAll: payload,
      };
    case types.FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: payload,
      };
    case types.FETCH_ALL_CONNECTIONS_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case types.FETCH_ALL_CONNECTIONS_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        connectionsAll: payload,
      };
    case types.FETCH_ALL_CONNECTIONS_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: payload,
      };

    case types.CHECK_USER_PROFILE_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case types.CHECK_USER_PROFILE_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        user: [...state.user, payload],
      };
    case types.CHECK_USER_PROFILE_FAILURE:
      return {
        ...state,
        checkingUserInfo: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
