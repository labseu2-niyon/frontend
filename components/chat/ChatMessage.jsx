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
            ? `${currentUser.first_name} ${currentUser.last_name}`
            : `${user.sender.first_name} ${user.sender.last_name}`
        }
        message={user.message}
        date={user.dateSent}
        image={
          user.sender.profile_picture ||
          'https://image.flaticon.com/icons/svg/660/660611.svg'
        }
      />
    </Sender>
  );
};

export default ChatMessage;

const Sender = styled.div`
  display: flex;
  padding-left: 5px;
  /* background-color: ${props =>
    props.currentUser ? '#eafaf1' : '#e6f6fb'}; */
    /* background-color: ${props =>
      props.currentUser ? '#eafaf1' : '#e6f6fb'}; */
`;
