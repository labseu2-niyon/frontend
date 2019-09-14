import { useState } from 'react';
import styled from 'styled-components';
import { useRouter, withRouter } from 'next/router';

const Chat = ({ username, chatHistory, currentUser, router, socket }) => {
  const [message, setMessage] = useState('');
  console.log(chatHistory);
  const handleSend = () => {
    const { query } = router;
    const dataForTheServer = {
      sender: currentUser.id,
      reciver: Number(query.id),
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
      <Input>
        <input
          placeholder="enter your message..."
          onChange={e => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={handleSend}>Send</button>
      </Input>
    </Wrapper>
  );
};
export default withRouter(Chat);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10%;
  left: 50%;
`;

const Window = styled.div`
  border: 1px solid black;
  height: 80vh;
  width: 400px;
`;

const Input = styled.div`
  display: flex;
  input {
    width: 80%;
  }
  button {
    width: 20%;
  }
`;
