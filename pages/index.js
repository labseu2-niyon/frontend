import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/~common/index';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Home() {
  return (
    <Wrapper>
      <h1>Niyon homepage</h1>
      <Button primary>Let&apos;s go</Button>
    </Wrapper>
  );
}

export default Home;
