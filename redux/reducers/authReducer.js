import { types } from '../authConstants';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
  fromClient: [],
};

export const authReducer = (state = initialState, { type, payload }) => {
  if (type === types.SET_CLIENT_STATE) {
    return {
      ...state,
      fromClient: payload,
    };
  }
  return state;
};

// Pascal's Reducers

// export default (state, action) => {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case actionTypes.DECREMENT:
//       return { ...state, count: state.count - 1 };
//     case actionTypes.RESET:
//       return { ...state, count: 0 };

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

//     case actionTypes.LOG_IN_USER_REQUEST:
//       return {
//         ...state,
//         queryingDatabase: true
//       };
//     case actionTypes.LOG_IN_USER_SUCCESS:
//       return {
//         ...state,
//         queryingDatabase: false,
//         token: action.payload.token,
//         message: action.payload.message
//       };
//     case actionTypes.LOG_IN_USER_FAILURE:
//       return {
//         ...state,
//         queryingDatabase: false,
//         error: action.payload
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
