/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Comment from './Comment';

const ChatMessage = ({ user, currentUser }) => {
  return (
    <Sender
      currentUser={user.sender.username === currentUser.username ? true : false}
    >
      <Comment
        username={
          user.sender.username === currentUser.username
            ? currentUser.username
            : user.sender.username
        }
        message={user.message}
        date={user.dateSent}
        image={user.sender.profile_picture}
      />
    </Sender>
  );
};

export default ChatMessage;

const Sender = styled.div`
  background-color: #eafaf1;
  display: flex;
  padding-left: 5px;
  background-color: ${props => (props.currentUser ? '#eafaf1' : '#e6f6fb')};
`;
