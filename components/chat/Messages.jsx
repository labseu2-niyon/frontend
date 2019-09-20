/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Card, Input, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { PulseLoader } from 'react-spinners';
import ChatMessage from './ChatMessage';

const Chat = ({
  chatHistory,
  currentUser,
  socket,
  currentRequestId,
  currentConnectionId,
  userTyping
}) => {
  const messagesEndRef = useRef(null);
  const [message, setMessage] = useState('');

  if (message.length === 0) {
    socket.emit('typing', '');
  } else if (message.length > 0) {
    scrollToBottom();
    socket.emit('typing', currentUser.username);
  }

  const type = userTyping ? (
    <TYPEWRAPPER>
      <PulseLoader sizeUnit={'px'} size={8} color={'#123abc'} loading={true} />
      <p>
        <span>{userTyping}</span> is typing
      </p>
    </TYPEWRAPPER>
  ) : (
    ''
  );

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
        <p style={{ padding: '3px' }}>{type}</p>
        <div ref={messagesEndRef} />
      </Window>
      <InputWrapper>
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
  null
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

const InputWrapper = styled.div`
  display: flex;
  height: 5vh;
  margin: 20px;

  button {
    width: 20%;
  }
`;

const TYPEWRAPPER = styled.div`
  display: flex;
  color: lightGrey;
  padding-right: 25px;
  font-style: italic;
  bottom: 20%;
  position: relative;
  span {
    text-transform: uppercase;
    margin-left: 10px;
  }
  p {
  }
`;
