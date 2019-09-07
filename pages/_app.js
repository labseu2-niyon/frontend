import App from 'next/app';
import React from 'react';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../lib/withReduxStore';
import { theme } from '../lib/theme';
import Loading from '../components/~common/Loading';

export default withRedux(makeStore, { debug: false })(
  class MyApp extends App {
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <>
          <Provider store={store}>
            <PersistGate persistor={store.__persistor} loading={<Loading />}>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </PersistGate>
          </Provider>
        </>
      );
    }
  }
);
