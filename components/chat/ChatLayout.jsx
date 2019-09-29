/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';
import { saveConnectionId } from '../../redux/actions/authActions';

const ChatLayout = props => {
  const { socket } = props;
  useEffect(() => {
    props.saveConnectionId(props.currentConnectionId);
    socket.emit('chatOpen', { chatId: props.currentConnectionId });
  }, [props.currentConnectionId]);

  useEffect(() => {
    saveConnectionId(props.connectionId);
    socket.emit('chatOpen', { chatId: props.currentConnectionId2 });
  }, [props.chatHistory]);

  return (
    <Main>
      <UserList
        userList={props.userList}
        socket={socket}
        currentUser={props.currentUser}
        currentConnectionId={props.currentConnectionId2}
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

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.user,
    authReducer: state.authReducer,
    //current connection its comming dirrectly from withAuth when user loggedin
    currentConnectionId2: state.authReducer.connectionId
    //- not taken from redux-store anymore
  };
};

export default connect(
  mapStateToProps,
  { saveConnectionId }
)(ChatLayout);
