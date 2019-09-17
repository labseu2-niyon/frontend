import styled from 'styled-components';
import { Card } from 'antd';
import User from './User';
import { useState } from 'react';

const UserList = ({ userList, socket, currentUser }) => {
  const [chosen, setChosen] = useState();

  console.log(userList);

  return (
    <Root>
      {userList &&
        currentUser &&
        userList.map(user => {
          return (
            <User
              user={
                user.requestUser.username !== currentUser.username
                  ? user.requestUser
                  : user.sentuser
              }
              connectionId={user.connectionId}
              key={user.connectionId}
              socket={socket}
              currentUser={currentUser}
              active={user.connectionId === chosen}
              onClick={() => setChosen(user.connectionId)}
            />
          );
        })}
    </Root>
  );
};

export default UserList;

const Root = styled(Card)`
  min-width: 200px;
  height: 80vh;
  overflow-y: scroll;
  margin-right: 20px;

  &.ant-card-bordered {
    border: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 5px;
  }
`;
