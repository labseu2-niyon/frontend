import { useState } from 'react';
import styled from 'styled-components';

const Chat = ({ username, chatHistory }) => {
  //console.log(username, chatHistory);
  return (
    <Wrapper>
      <Window>
        <p>{username}</p>
      </Window>
      <Input>
        <input placeholder="enter your message..." />
        <button>Send</button>
      </Input>
    </Wrapper>
  );
};
export default Chat;

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
