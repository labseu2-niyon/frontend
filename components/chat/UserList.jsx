import styled from 'styled-components';
import User from './User';
import { Card } from 'antd';

const UserList = ({ userList, socket, currentUser }) => {
  return (
    <Root>
      {userList &&
        userList.map(user => (
          <User
            user={user}
            key={user.connectionId}
            socket={socket}
            currentUser={currentUser}
          />
        ))}
    </Root>
  );
};

export default UserList;

const Root = styled(Card)`
  min-width: 30%;
  height: 80vh;
  overflow-y: scroll;
`;
