/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';
import { fetchUser } from '../../redux/actions/userActions';
import jwt from 'jsonwebtoken';

const ChatLayout = props => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userList, setUserList] = useState([]);
  const { socket } = props;
  const user = jwt.decode(props.authReducer.token);

  useEffect(() => {
    props.fetchUser(user.username);

    socket.on('connectionList', data => {
      setUserList(data);
    });

    socket.emit('chatOpen', { chatId: props.currentConnectionId });
    socket.on('chatHistory', data => {
      setChatHistory(data);
    });
  }, []);

  useEffect(() => {
    socket.on('connectionList', data => {
      setUserList(data);
    });

    socket.emit('chatOpen', { chatId: props.currentConnectionId });
  }, [chatHistory.length]);

  return (
    <Main>
      <UserList
        userList={userList}
        socket={socket}
        currentUser={props.currentUser}
        currentConnectionId={props.currentConnectionId}
      />
      {chatHistory && (
        <Chat
          socket={socket}
          chatHistory={chatHistory}
          currentUser={props.currentUser}
          userList={userList}
        />
      )}
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .ant-card-body {
    padding: 0;
    margin: 0;
    border: none;
  }
`;

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.user,
    authReducer: state.authReducer,
    currentConnectionId: state.authReducer.connectionId
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(ChatLayout);
