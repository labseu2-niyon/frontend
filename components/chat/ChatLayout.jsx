/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const dummyChatHistory = [
  {
    message: 'sdsdsddsd',
    date: 23.1982,
    requestUser: 'ION '
  },
  {
    message: 'Mesage is sdsdaa',
    date: 23.1982,
    requestUser: 'Rafa '
  },
  {
    message: 'Mesage is sdsdaa',
    date: 23.1982,
    requestUser: 'Jonny '
  },
  {
    message: 'Mesage is sdsdaa',
    date: 23.1982,
    sentUser: 'Pacala '
  },
  {
    message: 'Mesage is sdsdsddcqecaa',
    date: 23.1982,
    requestUser: 'Maria '
  }
];

const ChatLayout = props => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userList, setUserList] = useState([]);
  const { socket } = props;
  useEffect(() => {
    //console.log('THIS IS CALLING', socket);
    socket.on('connectionList', data => {
      console.log(data);
      setUserList(data);
    });

    // socket.on('chatHistory', data => {
    //   //console.log('CHAT HISTORY: ', data);
    //   setChatHistory(data);
    // });
  }, []);
  return (
    <Main>
      <UserList
        userList={userList}
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
  justify-content: space-between;
  width: 100%;
`;

const mapStateToProps = state => {
  return {
    //usersList: state.userReducer.usersAll,
    currentUser: state.userReducer.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(ChatLayout);
