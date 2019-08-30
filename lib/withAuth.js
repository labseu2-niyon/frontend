import Router from 'next/router';
import React from 'react';

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
    // Evaluate the composed component's getInitialProps()
    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    // However we establish if the user is logged in, we'll update it here.
    // const loggedin = localStorage.getItem('user');
    const loggedin = true;

    if (!loggedin) {
      redirect(ctx, '/auth/login');
    }

    return {
      loggedin,
      ...composedInitialProps,
    };
  }

  render() {
    return <ComposedComponent {...this.props} />;
  }
};
