import styled from 'styled-components';
import { Card } from 'antd';
import User from './User';

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
