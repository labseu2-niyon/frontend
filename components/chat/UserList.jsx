import styled from 'styled-components';
import User from './User';
import Scrollbar from './Scrollbar';

const UserList = ({ usersList, socket, currentUser }) => {
  return (
    <Root>
      <Scrollbar style={{ height: '80vh' }}>
        {usersList.map(user => (
          <User
            user={user}
            key={user.id}
            socket={socket}
            currentUser={currentUser}
          />
        ))}
      </Scrollbar>
    </Root>
  );
};

export default UserList;

const Root = styled.div`
  width: 135px;
  height: 80vh;
  overflow-y: scroll;
`;
