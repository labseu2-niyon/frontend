import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
    height: 40px;
    width: 150px;
    background: ${({ theme }) => theme.secondary};
    color: #fff;
    border: none;
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
    font-size: 14px;
`;

function Home() {
  return (
    <Wrapper>
      <h1>Niyon homepage</h1>
      <Button>Let&apos;s go</Button>
    </Wrapper>
  );
}

export default Home;
