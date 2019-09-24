/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const ChatLayout = props => {
  const { socket } = props;

  useEffect(() => {
    socket.emit('chatOpen', { chatId: props.currentConnectionId });
  }, []);

  useEffect(() => {
    socket.emit('chatOpen', { chatId: props.currentConnectionId });
  }, [props.chatHistory]);

  return (
    <Main>
      <UserList
        userList={props.userList}
        socket={socket}
        currentUser={props.currentUser}
        currentConnectionId={props.currentConnectionId}
      />
      {props.chatHistory && (
        <Chat
          socket={socket}
          chatHistory={props.chatHistory}
          currentUser={props.currentUser}
          userList={props.userList}
          userTyping={props.userTyping}
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

const mapStateToProps = state => ({
  currentUser: state.userReducer.user,
  authReducer: state.authReducer,
  // current connection its comming dirrectly from withAuth when user loggedin
  currentConnectionId: state.authReducer.connectionId
  // - not taken from redux-store anymore
});

export default connect(
  mapStateToProps,
  {}
)(ChatLayout);


// @media screen and (max-width: 600px) {

//   .hXtAjt {
//     display: flex;
//     justify-content: space-between;
//   }

//   /* left side with list of users */
//   .ant-card.jvJjgw {
//     background-color: green;
//     width: 15%;
//   }

//   /* top left wrapper of home icon and CHATS */
//   .ant-card-body {
//     padding: 0;
//     margin: 0;
//     border: none;
//     background-color: grey;
//     /* display: flex; */
//     /* justify-content: center; */
//   }

//   /* top left home icon and CHATS */
//   .jIRBJL {
//     padding: 0.5rem;
//     margin: 0;
//     border: none;
//     background-color: purple;
//   }

//   /* CHATS */
//   .bEKYEe {
//     display: none;
//   }

//   .iQMAjv {
//     background-color: orange;
//     margin: 0;
//     width: 100%;
//   }

//   #chatBox {
//     background-color: yellow;
//     width: 50%;
//   }
// }