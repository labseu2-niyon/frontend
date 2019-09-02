import Router from 'next/router';
import React from 'react';
import nookies from 'nookies';

const redirect = (ctx = {}, target) => {
  if (ctx.res) {
    // server side redirection
    // More info: https://bit.ly/2TcSlQ9
    ctx.res.writeHead(303, { Location: target });
    ctx.res.end();
  } else {
    // client side redirection
    Router.push(target);
  }
};

// HOC
export default (ComposedComponent) => class WithAuth extends React.Component {
  static async getInitialProps(ctx) {
    // Evaluate the composed component's getInitialProps(), needed for this to run before page displays
    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    // Need to check if the token is still valid, API
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
