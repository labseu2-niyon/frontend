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
  switch (type) {
    case types.SET_EMAIL_DATA:
      return {
        ...state,
        emailData: payload,
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
      };
    case types.LOG_IN_USER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        message: payload.message,
      };
    case types.LOG_IN_USER_FAILURE:
      return {
        ...state,
        error: payload,
      };

    case types.LOG_OUT_USER_REQUEST:
      return {
        ...state,
      };
    case types.LOG_OUT_USER_SUCCESS:
      return {
        ...state,
        token: null,
        message: payload.message,
      };
    case types.LOG_OUT_USER_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

// Pascal's Reducers

// export default (state, action) => {
//   switch (action.type) {

//     case actionTypes.REGISTER_USER_REQUEST:
//       return {
//         ...state,
//         queryingDatabase: true
//       };
//     case actionTypes.REGISTER_USER_SUCCESS:
//       return {
//         ...state,
//         queryingDatabase: false,
//         user: [...state.user, action.payload]
//       };
//     case actionTypes.REGISTER_USER_FAILURE:
//       return {
//         ...state,
//         queryingDatabase: false,
//         errorMessage: action.payload
//       };

//     case actionTypes.RESET_PASSWORD_REQUEST:
//       return {
//         ...state,
//         queryingDatabase: true
//       };
//     case actionTypes.RESET_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         queryingDatabase: false,
//         message: action.payload
//       };
//     case actionTypes.RESET_PASSWORD_FAILURE:
//       return {
//         ...state,
//         queryingDatabase: false,
//         errorMessage: action.payload
//       };

//     case actionTypes.UPDATE_USER_PROFILE_REQUEST:
//       return {
//         ...state,
//         queryingDatabase: true
//       };
//     case actionTypes.UPDATE_USER_PROFILE_SUCCESS:
//       return {
//         ...state,
//         queryingDatabase: false,
//         user: [...state.user, action.payload]
//         // message: action.payload,
//       };
//     case actionTypes.UPDATE_USER_PROFILE_FAILURE:
//       return {
//         ...state,
//         queryingDatabase: false,
//         errorMessage: action.payload
//       };

//     case actionTypes.UPDATE_PASSWORD_REQUEST:
//       return {
//         ...state,
//         queryingDatabase: true
//       };
//     case actionTypes.UPDATE_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         queryingDatabase: false,
//         message: action.payload
//       };
//     case actionTypes.UPDATE_PASSWORD_FAILURE:
//       return {
//         ...state,
//         queryingDatabase: false,
//         errorMessage: action.payload
//       };
//   }
// };
