import User from './User';

const UserList = ({ usersList, socket, currentUser }) => {
  return (
    <div>
      {usersList.map(user => (
        <User
          user={user}
          key={user.id}
          socket={socket}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
};

export default UserList;
