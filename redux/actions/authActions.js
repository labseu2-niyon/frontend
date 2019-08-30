import { types } from '../authConstants';

const startLoading = () => ({
  type: types.START_LOADING,
});

const stopLoading = () => ({
  type: types.STOP_LOADING,
});

export const googleSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Google endpoint request');
  dispatch(stopLoading());
};

export const facebookSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Facebook endpoint request');
  dispatch(stopLoading());
};

export const twitterSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Twitter endpoint request');
  dispatch(stopLoading());
};

export const githubSignup = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Github endpoint request');
  dispatch(stopLoading());
};

export const emailSignUp = () => (dispatch) => {
  dispatch(startLoading());

  // console.log('Email endpoint request', userData);
  dispatch(stopLoading());
};

export const setClientState = (clientState) => ({
  type: types.SET_CLIENT_STATE,
  payload: clientState,
});
