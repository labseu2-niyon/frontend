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

export const emailSignup = (data) => ({
  type: types.SET_EMAIL_DATA,
  payload: data,
});

export const locationData = (data) => ({
  type: types.SET_LOCATION_DATA,
  payload: data,
});
