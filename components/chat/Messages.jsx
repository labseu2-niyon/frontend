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

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ block: 'end' });
  };

  useEffect(() => {
    socket.on('newChat', data => {
      socket.emit('chatOpen', currentConnectionId);
    });
  }, []);

  // useEffect(() => {
  //   if (message.length > 0) {
  //     //console.log('YESS');
  //     socket.on('typing', data => {
  //       console.log('typing:', data);
  //     });
  //   }
  // }, [message]);

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
  margin-left: 250px;
  width: 100%;
`;

const Window = styled(Card)`
  height: 95vh;
  overflow-y: scroll;
  padding: 0;
`;

const InputWrapper = styled.div`
  display: flex;
  height: 5vh;

  button {
    width: 20%;
  }
`;
