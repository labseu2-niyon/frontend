import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import * as Comp from '../components/~common/index';

import { theme } from '../lib/theme';

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const customStyles = {
  margin: theme.h1,
};

function Login() {
  return (
    <Wrapper>
      <p>NAV BAR</p>
      <Comp.Text fontSize={theme.h1} customStyles={customStyles}>
        Welcome Back
      </Comp.Text>
      <Comp.Text fontSize={theme.largeText} margin={theme.largeText}>
        Do not miss your next opportunity. Sign in to stay updated on your
        professional world.
      </Comp.Text>


      <Comp.Button primary>Sign In</Comp.Button>

      <Link href="/resetPassword">
        <Comp.Text fontSize={theme.largeText}>Forgot Password?</Comp.Text>
      </Link>
      <Link href="/signup">
        <Comp.Text fontSize={theme.largeText}>New to Niyon? Join Now</Comp.Text>
      </Link>
    </Wrapper>
  );
}

export default Login;
