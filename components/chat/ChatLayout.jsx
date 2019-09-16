/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const dummyChatHistory = [
  {
    message:
      ' We supply a series of design principles, practical patterns and high quality design resources to help people create their product prototypes beautifully and efficiently',
    date: 23.1982,
    requestUser: {
      username: 'Ion'
    }
  },
  {
    message: 'Mesage is sdsdaa',
    date: 23.1982,
    requestUser: {
      username: 'Rafa'
    }
  },
  {
    message: 'Mesage is sdsdaa',
    date: '19 Apr 1976',
    requestUser: {
      username: 'Tom'
    }
  },
  {
    message: 'Mesage is sdsdaa',
    date: '19 Apr 1976',
    sentUser: {
      username: 'Jerry'
    }
  },
  {
    message: 'Mesage is sdsdsddcqecaa',
    date: '19 Apr 1976',
    requestUser: {
      username: 'maria'
    }
  },
  {
    message:
      'Mesage is sjaslklsakdj jklsaakjdlkaj lkasjkd alajksdlkasjdlka dla akldjk',
    date: '19 Apr 1976',
    sentUser: {
      username: 'Jerry'
    }
  }
];

const ChatLayout = props => {
  const [chatHistory, setChatHistory] = useState(dummyChatHistory);
  const [userList, setUserList] = useState([]);
  const { socket } = props;
  useEffect(() => {
    //console.log('THIS IS CALLING', socket);
    socket.on('connectionList', data => {
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
