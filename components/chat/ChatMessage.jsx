/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Comment from './Comment';

const ChatMessage = ({ user }) => {
  if (user.requestUser) {
    return (
      <Sender>
        <Comment
          username={user.requestUser.username}
          message={user.message}
          date={user.date}
        />
      </Sender>
    );
  }
  if (user.sentUser) {
    return (
      <Recevier>
        <Comment username={user.sentUser.username} message={user.message} />
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
  padding: 0;
  /* justify-content: flex-start; */
`;

const Sender = styled.div`
  background-color: #eafaf1;
  display: flex;
  padding: 0;
  /* justify-content: flex-end; */
`;
