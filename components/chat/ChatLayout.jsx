import UserList from './UserList';
import Chat from './Messages';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from 'react';

const ChatLayout = props => {
  useEffect(() => {
    props.socket.on('Delba', msg => {
      console.log(msg);
    });
  }, []);

  return (
    <Main>
      <UserList usersList={props.usersList}></UserList>
      <Chat username={props.usersList.username}></Chat>
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
