/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import UserList from './UserList';
import Chat from './Messages';

const ChatLayout = props => {
  useEffect(() => {
    console.log(props.socket);
    props.socket.on('connected', msg => {
      console.log('INSIDE CHAT LAYOUT ', msg);
    });
  }, []);

  return (
    <Main>
      <UserList usersList={props.usersList} />
      <Chat username={props.usersList.username} />
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
