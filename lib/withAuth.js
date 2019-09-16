import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import io from 'socket.io-client';
import redirect from './redirect';

// HOC
export default ComposedComponent =>
  class WithAuth extends React.Component {
    static async getInitialProps(ctx) {
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
      return {
        ...composedInitialProps
      };
    }

    state = {
      socket: null
    };

    componentWillMount() {
      const socket = io('http://localhost:5001', {
        query: {
          //current user id
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
