import { actionTypes } from '../constants';

export default (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT:
      return { ...state, count: state.count - 1 };
    case actionTypes.RESET:
      return { ...state, count: 0 };
    case actionTypes.SUCCESS:
      return {
        ...state,
        queryingDatabase: false,
        token: action.payload,
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        queryingDatabase: false,
        errorMessage: action.payload,
      };
    case actionTypes.REGISTERING_USER:
      return {
        ...state,
        queryingDatabase: true,
      };
    default:
      return state;
  }
};
