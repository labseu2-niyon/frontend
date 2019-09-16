/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const mesagesData = [
  { name: 'Rambo', message: 'This is a message1' },
  { name: 'Arnold', message: 'Message 2' }
];

const ChatLayout = props => {
  const [chatHistory, setChatHistory] = useState(mesagesData);
  const { socket } = props;
  useEffect(() => {
    console.log(props.socket);
    socket.on('Delba', msg => {
      console.log('INSIDE CHAT LAYOUT ', msg);
    });
    socket.on('chatHistory', data => {
      console.log('CHAT HISTORY: ', data);
      setChatHistory(data);
    });
  }, []);

  return (
    <Main>
      <UserList
        usersList={props.usersList}
        socket={socket}
        currentUser={props.currentUser}
      />

      <Chat
        socket={socket}
        chatHistory={chatHistory}
        currentUser={props.currentUser}
      />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const mapStateToProps = state => {
  return {
    usersList: state.userReducer.usersAll,
    currentUser: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(ChatLayout);
