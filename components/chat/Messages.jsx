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
  // useEffect(() => {
  //   console.log(message);
  //   message.length > 0
  //     ? socket.broadcast.emit('typing', socket.id)
  //     : socket.broadcast.emit('stopTyping', socket.id);
  // }, []);

  // let id = chatHistory && chatHistory.map(item => item.connectionId);
  // console.log(id[0]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [message]);

  const handleSend = () => {
    scrollToBottom();
    const dataForTheServer = {
      sender: currentUser.id,
      receiver: currentRequestId,
      message,
      connectionId: currentConnectionId
    };
    console.log(dataForTheServer);
    socket.emit('messegeAdd', dataForTheServer);
    setMessage('');
  };
  return (
    <Wrapper>
      <Window>
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
  width: 100%;
`;

const Window = styled(Card)`
  height: 75vh;
  overflow-y: scroll;
  padding: 0;
`;

const InputWrapper = styled.div`
  display: flex;

  button {
    width: 20%;
  }
`;
