/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const dummyChatHistory = [
  {
    id: 2,
    connectionId: 1,
    read: false,
    dateSent: '2019-09-17T08:31:21.583Z',
    message: 'I am fine, Hello there how are you',
    sender: {
      id: 2,
      first_name: 'Jane',
      last_name: 'Doe',
      username: 'jane',
      profile_picture: null
    },
    reciever: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      username: 'john',
      profile_picture:
        'https://res.cloudinary.com/niyon/image/upload/v1568709098/niyon-app/xkycuq8yvjokynj8o3sr.png'
    }
  },
  {
    id: 3,
    connectionId: 1,
    read: false,
    dateSent: '2019-09-17T08:31:21.583Z',
    message: 'Not too bad',
    sender: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      username: 'john',
      profile_picture:
        'https://res.cloudinary.com/niyon/image/upload/v1568709098/niyon-app/xkycuq8yvjokynj8o3sr.png'
    },
    reciever: {
      id: 2,
      first_name: 'Jane',
      last_name: 'Doe',
      username: 'jane',
      profile_picture: null
    }
  },
  {
    id: 1,
    connectionId: 1,
    read: true,
    dateSent: '2019-09-17T08:31:21.582Z',
    message: 'Hello there how are you',
    sender: {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      username: 'john',
      profile_picture:
        'https://res.cloudinary.com/niyon/image/upload/v1568709098/niyon-app/xkycuq8yvjokynj8o3sr.png'
    },
    reciever: {
      id: 2,
      first_name: 'Jane',
      last_name: 'Doe',
      username: 'jane',
      profile_picture: null
    }
  }
];

const ChatLayout = props => {
  const [chatHistory, setChatHistory] = useState(dummyChatHistory);
  const [userList, setUserList] = useState([]);
  const { socket } = props;
  useEffect(() => {
    socket.on('connectionList', data => {
      setUserList(data);
    });

    socket.on('chatHistory', data => {
      console.log('CHAT HISTORY: ', data);
      //setChatHistory(data);
    });
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

  .ant-card-body {
    padding: 0;
    margin: 0;
    border: none;
  }
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
