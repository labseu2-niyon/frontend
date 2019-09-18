/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const ChatLayout = props => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userList, setUserList] = useState([]);
  const { socket } = props;
  useEffect(() => {
    socket.on('connectionList', data => {
      setUserList(data);
    });
    socket.emit('chatOpen', { chatId: props.currentConnectionId });

    socket.on('chatHistory', async data => {
      await setChatHistory(data);
    });
  }, []);
  return (
    <Main>
      {props.currentConnectionId && (
        <UserList
          userList={userList}
          socket={socket}
          currentUser={props.currentUser}
          currentConnectionId={props.currentConnectionId}
        />
      )}
      <Chat
        socket={socket}
        chatHistory={chatHistory}
        currentUser={props.currentUser}
        userList={userList}
      />
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
    currentConnectionId: state.authReducer.connectionId
  };
};

export default connect(
  mapStateToProps,
  {}
)(ChatLayout);
