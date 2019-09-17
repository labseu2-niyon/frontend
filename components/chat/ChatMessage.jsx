/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Comment from './Comment';

const ChatMessage = ({ user, currentUser }) => {
  console.log('CURRETN USER', currentUser.username);
  if (user.sender.username === currentUser.username) {
    return (
      <Sender>
        <Comment
          username={user.sender.username}
          message={user.message}
          date={user.dateSent}
          image={user.sender.profile_picture}
        />
      </Sender>
    );
  }
  if (user.sender.username !== currentUser.username) {
    return (
      <Recevier>
        <Comment
          username={user.reciever.username}
          message={user.message}
          date={user.dateSent}
          image={user.reciever.profile_picture}
        />
      </Recevier>
    );
  }
  return (
    <div>
      <p>No Messages</p>
    </div>
  );
};

export default ChatMessage;

const Recevier = styled.div`
  background-color: #e6f6fb;
  display: flex;
  padding-left: 20px;
  /* justify-content: flex-start; */
`;

const Sender = styled.div`
  background-color: #eafaf1;
  display: flex;
  padding-left: 5px;
  /* justify-content: flex-end; */
`;
