import React from 'react';
import PropTypes from 'prop-types';
import { initializeStore } from '../redux/store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

const ReduxApp = (App) => {
  function AppWithRedux(props) {
    const reduxStore = getOrCreateStore(props.initialReduxState);
    return <App {...props} reduxStore={reduxStore} />;
  }

  AppWithRedux.getInitialProps = async (appContext) => {
    const reduxStore = getOrCreateStore();

    // eslint-disable-next-line
    appContext.ctx.reduxStore = reduxStore;

    let appProps = {};
    if (typeof App.getInitialProps === 'function') {
      appProps = await App.getInitialProps(appContext);
    }

    return {
      ...appProps,
      initialReduxState: reduxStore.getState(),
    };
  };

  AppWithRedux.propTypes = {
    initialReduxState: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  return AppWithRedux;
};


export default ReduxApp;
