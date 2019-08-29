import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const exampleInitialState = {
  count: 0,
  queryingDatabase: false,
  errorMessage: null,
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  );
}
