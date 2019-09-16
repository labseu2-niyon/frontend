/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Card, Input, Button, Icon } from 'antd';
import { connect } from 'react-redux';

const Chat = ({
  username,
  chatHistory,
  currentUser,
  socket,
  currentRequestId
}) => {
  const [message, setMessage] = useState('');
  // useEffect(() => {
  //   console.log(message);
  //   message.length > 0
  //     ? socket.emit('typing', socket.id)
  //     : socket.emit('stopTyping', socket.id);
  // }, []);

  const handleSend = () => {
    const dataForTheServer = {
      sender: currentUser.id,
      receiver: currentRequestId,
      message,
      connectionId: socket.id
    };
    console.log(dataForTheServer);
    setMessage('');
    socket.emit('messegeAdd', dataForTheServer);
  };
  return (
    <Wrapper>
      <Window>
        <p>{username}</p>
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
    currentRequestId: state.authReducer.requestId
  };
};

export default connect(
  mapStateToProps,
  null
)(Chat);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const Window = styled(Card)`
  height: 75vh;
`;

const InputWrapper = styled.div`
  display: flex;

  button {
    width: 20%;
  }
`;
