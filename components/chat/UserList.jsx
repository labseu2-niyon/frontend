import styled from 'styled-components';
import User from './User';
import { Card } from 'antd';

const UserList = ({ usersList, socket, currentUser }) => {
  return (
    <Root>
      {usersList.map(user => (
        <User
          user={user}
          key={user.id}
          socket={socket}
          currentUser={currentUser}
        />
      ))}
    </Root>
  );
};

export default UserList;

const Root = styled(Card)`
  width: 135px;
  height: 80vh;
  overflow-y: scroll;
`;
