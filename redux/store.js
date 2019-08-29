import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const exampleInitialState = {
  count: 0,
  queryingDatabase: false,
  token: null,
  errorMessage: null,
  isLoggedIn: false,
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  );
}
