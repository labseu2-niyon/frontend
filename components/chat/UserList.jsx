import { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import User from './User';
import Link from 'next/link';
import { Icon } from 'antd';

const UserList = ({ userList, socket, currentUser, currentConnectionId }) => {
  const [chosen, setChosen] = useState(currentConnectionId);
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
    </Nav>
  );
};

export default UserList;

const Nav = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-sizing: border-box;
  /* padding: 2.5rem 0; */
  height: 100vh;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: scroll;

  &.ant-card-bordered {
    border: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;
