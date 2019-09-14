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
    socket.on('connected', msg => {
      console.log('INSIDE CHAT LAYOUT ', msg);
    });
    socket.on('chatHistory', data => {
      setChatHistory(data);
    });
  }, []);

  return (
    <Main>
      <UserList usersList={props.usersList} />
      <Chat username={props.usersList.username} chatHistory={chatHistory} />
    </Main>
  );
};

const Main = styled.div`
  display: flex;
`;

const mapStateToProps = state => {
  return { usersList: state.userReducer.usersAll };
};

export default connect(
  mapStateToProps,
  {}
)(ChatLayout);
