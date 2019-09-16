import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Card, Input, Button, Icon } from 'antd';

const Chat = ({ username, chatHistory, currentUser, router, socket }) => {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   message.length
  //     ? socket.broadcast.emit('typing', socket.id)
  //     : socket.broadcast.emit('stopTyping', socket.id);
  // }, []);

  const handleSend = () => {
    const { query } = router;
    const dataForTheServer = {
      sender: currentUser.id,
      receiver: Number(query.id),
      message,
      connectionId: socket.id
    };

    console.log(dataForTheServer);
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
        />
        <Button type="primary" onClick={handleSend}>
          SEND
          <Icon type="right" />
        </Button>
      </InputWrapper>
    </Wrapper>
  );
};
export default withRouter(Chat);

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
