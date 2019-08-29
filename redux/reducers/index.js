import { actionTypes } from '../constants';

export default (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: 0 };

    case actionTypes.REGISTER_USER_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        // token: action.payload,
      };
    case actionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };

    case actionTypes.LOG_IN_USER_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        // token: action.payload.token,
        // message: action.payload.message,
        // id: action.payload.id,
        isLoggedIn: true,
      };
    case actionTypes.LOG_IN_USER_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        error: action.payload,
      };

    case actionTypes.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
      };
    case actionTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };

    case actionTypes.UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        queryingDatabase: true,
      };
    case actionTypes.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        message: action.payload,
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
        message: action.payload,
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
      };
    case actionTypes.FETCH_ALL_USERS_FAILURE:
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
