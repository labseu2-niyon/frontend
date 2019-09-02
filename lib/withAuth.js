import React from 'react';
import nookies from 'nookies';
import redirect from './redirect';

// HOC
export default (ComposedComponent) => class WithAuth extends React.Component {
  static async getInitialProps(ctx) {
    // Evaluate the composed component's getInitialProps(), needed for this to run before page displays
    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    // Need to check if the token is still valid (hasn't expired), with an API endpoint?
    const cookies = nookies.get(ctx);

    if (!cookies.token) {
      redirect(ctx, '/auth/login');
    }

    return {
      ...composedInitialProps,
    };
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};
