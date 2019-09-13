import { useEffect } from 'react';
import styled from 'styled-components';

const Chat = ({ username }) => {
  return (
    <Window>
      <p>{username}</p>
    </Window>
  );
};

const Window = styled.div`
  border: 1px solid black;
  height: 90vh;
`;

export default Chat;
