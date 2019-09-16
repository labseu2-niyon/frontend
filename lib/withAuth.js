import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import io from 'socket.io-client';
import redirect from './redirect';

const getToken = () => {
  const cookies = nookies.get({});
  let valid = false;

  if (cookies.token) {
    const { exp, subject } = jwt.decode(cookies.token);
    valid = exp > Math.floor(Date.now() / 1000);
    const token = { valid, subject };
    return token;
  }
};

export default ComposedComponent =>
  class WithAuth extends React.Component {
    static async getInitialProps(ctx) {
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      const token = getToken();

      if (!token.valid) {
        redirect(ctx, '/auth/login');
      }

      return {
        ...composedInitialProps
      };
    }

    state = {
      socket: null
    };

    componentWillMount() {
      const { subject } = getToken();
      const socket = io('http://localhost:5001', {
        query: {
          subject
        }
      });
      this.setState({ socket });
    }

    componentWillUnmount() {
      // console.log('Connection Out', this.props.socket);
    }

    render() {
      // console.log(this.props.socket);
      return <ComposedComponent {...this.props} socket={this.state.socket} />;
    }
  };
