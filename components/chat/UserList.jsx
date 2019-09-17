import styled from 'styled-components';
import { Card } from 'antd';
import User from './User';
import { useState } from 'react';

const UserList = ({ userList, socket, currentUser }) => {
  const [chosen, setChosen] = useState();
  console.log(chosen);
  return (
    <Root>
      {userList &&
        userList.map(user => (
          <User
            user={user}
            key={user.connectionId}
            socket={socket}
            currentUser={currentUser}
            active={user.connectionId === chosen}
            onClick={() => setChosen(user.connectionId)}
          />
        ))}
    </Root>
  );
};

export default UserList;

const Root = styled(Card)`
  min-width: 130px;
  height: 80vh;
  overflow-y: scroll;
`;
