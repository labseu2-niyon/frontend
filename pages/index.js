import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  width: 200px;
  background: deepskyblue;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: background 400ms;

  &:hover {
    background: blue;
  }
`;

function Home() {
  return (
    <div>
     <Button>Hello</Button>
    </div>
  );
}

export default Home;
