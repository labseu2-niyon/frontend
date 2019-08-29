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

    default:
      return state;
  }
};
