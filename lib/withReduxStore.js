// lib/redux.js
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/index';

const makeConfiguredStore = (reducer, initialState) => createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export const makeStore = (initialState, { isServer }) => {
  if (isServer) {
    initialState = initialState || { fromServer: 'foo' };

    return makeConfiguredStore(rootReducer, initialState);
  }
  // we need it only on client side
  /* eslint-disable global-require */
  const { persistStore, persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;
  /* eslint-enable global-require */

  const persistConfig = {
    key: 'nextjs',
    storage,
    blacklist: ['userReducer']
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer, initialState);

  store.__persistor = persistStore(store); // Nasty hack

  return store;
};
