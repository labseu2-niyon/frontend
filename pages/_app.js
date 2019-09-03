import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../lib/withReduxStore';
import { theme } from '../lib/theme';
import Loading from '../components/~common/Loading';

// class MyApp extends App {
//   render() {
//     const { Component, pageProps, reduxStore } = this.props;
//     return (
//       <Provider store={reduxStore}>
//         <PersistGate
//           persistor={reduxStore.persistor}
//           loading={<div>Loading</div>}
//         >
//           <ThemeProvider theme={theme}>
//             <Component {...pageProps} />
//           </ThemeProvider>
//         </PersistGate>
//       </Provider>
//     );
//   }
// }

// export default withReduxStore(MyApp);

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App {
    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <PersistGate
              persistor={store.__persistor}
              loading={<Loading />}
            >
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </PersistGate>
          </Provider>
        </Container>
      );
    }
  },
);
