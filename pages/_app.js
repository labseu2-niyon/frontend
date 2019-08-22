import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import withReduxStore from '../lib/withReduxStore';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
