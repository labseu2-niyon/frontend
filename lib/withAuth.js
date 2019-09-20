import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import redirect from './redirect';

// HOC
export default (ComposedComponent) => class WithAuth extends React.Component {
  static async getInitialProps(ctx) {
    // Evaluate the composed component's getInitialProps(), needed for this to run before page displays
    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    const cookies = nookies.get(ctx);
    let validToken = false;

    if (cookies.token) {
      const { exp } = jwt.decode(cookies.token);
      validToken = exp > Math.floor(Date.now() / 1000);
    }

    if (!validToken) {
      redirect(ctx, '/auth/login');
    }
    //

    return {
      ...composedInitialProps,
    };
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};
