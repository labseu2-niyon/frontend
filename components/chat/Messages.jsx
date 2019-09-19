/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Card, Input, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { scrollToBottom } from '../../redux/actions/userActions';
import ChatMessage from './ChatMessage';

const Chat = ({
  chatHistory,
  currentUser,
  socket,
  currentRequestId,
  currentConnectionId,
  scrollToBottom
}) => {
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState('');

  const scrollToBottom2 = () => {
    messagesEndRef.current.scrollIntoView({ block: 'end' });
  };

  useEffect(() => {
    scrollToBottom2();
  }, [chatHistory.length]);

  useEffect(() => {
    socket.on('newChat', data => {
      socket.emit('chatOpen', currentConnectionId);
    });
  }, []);

  const handleSend = e => {
    e.preventDefault();
    setTimeout(async () => {
      await scrollToBottom();
    }, 450);
    const dataForTheServer = {
      sender: currentUser.id,
      receiver: currentRequestId,
      message,
      connectionId: currentConnectionId
    };

    if (message.length) {
      socket.emit('messegeAdd', dataForTheServer);
      setMessage('');
    }
  };
  return (
    <Wrapper>
      <Window id="chatBottom">
        {chatHistory &&
          chatHistory.map((user, i) => {
            return (
              currentUser && (
                <ChatMessage key={i} user={user} currentUser={currentUser} />
              )
            );
          })}
        <div ref={messagesEndRef} />
      </Window>
      <InputWrapper onSubmit={handleSend}>
        <Input
          placeholder="enter your message..."
          allowClear
          onChange={e => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <Button type="primary" onClick={handleSend}>
          SEND
          <Icon type="right" />
        </Button>
      </InputWrapper>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentRequestId: state.authReducer.requestId,
    currentConnectionId: state.authReducer.connectionId
  };
};

export default connect(
  mapStateToProps,
  { scrollToBottom }
)(Chat);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Window = styled(Card)`
  height: 75vh;
  overflow-y: scroll;
  padding: 0;
`;

const InputWrapper = styled.form`
  display: flex;

  button {
    width: 20%;
  }
`;
