import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import io from 'socket.io-client';
import redirect from './redirect';
import { getUrl } from './../redux/actions/utils';
import ChatLayout from '../components/chat/ChatLayout';

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
      socket: null,
      userTyping: '',
      userList: [],
      chatHistory: [],
      connectionId: 1
    };

    componentDidMount() {
      const cookies = nookies.get({});
      let id;
      if (cookies.token) {
        const { subject } = jwt.decode(cookies.token);
        id = subject;
      }
      const socket = io('https://niyon-dev.herokuapp.com/', {
        query: {
          id
        }
      });
      socket.on('userIsTyping', data => {
        this.setState({ userTyping: data });
      });
      socket.on('connectionList', data => {
        this.setState({ connectionId: data[0].connectionId });
        this.setState({ userList: data });
      });
      socket.on('chatHistory', data => {
        this.setState({ chatHistory: data });
      });

      socket.emit('chatOpen', { chatId: this.state.connectionId });

      this.setState({ socket });
    }

    componentWillUnmount() {
      this.state.socket.close();
    }

    render() {
      return (
        this.state.socket && (
          <ComposedComponent
            {...this.props}
            socket={this.state.socket}
            userTyping={this.state.userTyping}
            userList={this.state.userList}
            chatHistory={this.state.chatHistory}
          />
        )
      );
    }
  };
