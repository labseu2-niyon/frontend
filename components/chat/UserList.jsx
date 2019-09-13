import User from './User';

const UserList = ({ usersList }) => {
  return (
    <div>
      {usersList.map(user => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default UserList;
