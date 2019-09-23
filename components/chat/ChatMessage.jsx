/* eslint-disable react/prop-types */
import Comment from './Comment';

const ChatMessage = ({ user, currentUser }) => {
  return (
    <Comment
      name={
        user.sender.username === currentUser.username
          ? `${currentUser.first_name} ${currentUser.last_name}`
          : `${user.sender.first_name} ${user.sender.last_name}`
      }
      message={user.message}
      date={user.dateSent}
      image={user.sender.profile_picture}
      currentUser={user.sender.username === currentUser.username ? true : false}
    />
  );
};

export default ChatMessage;
