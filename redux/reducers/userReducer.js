import { actionTypes } from '../userConstants';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        user: [...state.user, action.payload],
        // message: action.payload,
      };
    case actionTypes.UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };

    case actionTypes.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        message: action.payload,
      };
    case actionTypes.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };

    case actionTypes.UPLOAD_USER_IMAGE_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        user: [...state.user, action.payload],
      };
    case actionTypes.UPLOAD_USER_IMAGE_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };

    case actionTypes.FETCH_ALL_USERS_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        usersAll: action.payload,
      };
    case actionTypes.FETCH_ALL_USERS_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };
    case actionTypes.FETCH_ALL_CONNECTIONS_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.FETCH_ALL_CONNECTIONS_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        connectionsAll: action.payload,
      };
    case actionTypes.FETCH_ALL_CONNECTIONS_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };

    case actionTypes.CHECK_USER_PROFILE_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.CHECK_USER_PROFILE_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        user: [...state.user, action.payload],
      };
    case actionTypes.CHECK_USER_PROFILE_FAILURE:
      return {
        ...state,
        checkingUserInfo: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

