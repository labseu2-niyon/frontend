/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Card, Input, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import ChatMessage from './ChatMessage';

const Chat = ({
  chatHistory,
  currentUser,
  socket,
  currentRequestId,
  currentConnectionId
}) => {
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState('');

  function scrollToBottom() {
    const messages = document.getElementById('chatBox');
    messages.scrollTop = messages.scrollHeight;
  }

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory.length]);

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 1000);
    socket.on('newChat', data => {
      socket.emit('chatOpen', currentConnectionId);
    });
  }, []);

  const handleSend = () => {
    setTimeout(() => {
      scrollToBottom();
    }, 400);
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
      <Window id="chatBox">
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
            socket.emit('typing', { user: currentUser.username, type: true });
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
  {}
)(Chat);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  width: 100%;

  .ant-card-bordered {
    border: none;
  }
`;

const Window = styled(Card)`
  height: 90vh;
  overflow-y: scroll;
  margin: 0px 20px;
  padding: 0;
`;

const InputWrapper = styled.form`
  display: flex;
  height: 5vh;
  margin: 20px;

  button {
    width: 20%;
  }
`;
