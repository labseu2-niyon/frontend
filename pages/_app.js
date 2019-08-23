import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import withReduxStore from '../lib/withReduxStore';
import { theme } from '../lib/theme';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
