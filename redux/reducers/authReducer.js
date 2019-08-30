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
