import { types } from '../authConstants';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
  fromClient: [],
  token: null,
  message: '',
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_CLIENT_STATE:
      return {
        ...state,
        fromClient: payload,
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
