import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import * as Comp from '../components/~common/index';

import { theme } from '../lib/theme';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
`;

const customStyles = {
  margin: theme.h1,
};

function Login() {
  return (
    <Wrapper>
      <Comp.Text fontSize={theme.h3} customStyles={customStyles}>
        Welcome Back
      </Comp.Text>
      <Comp.Text fontSize={theme.mediumText}>
        Don&apost miss your next opportunity. Sign in to stay updated on your
        professional world.
      </Comp.Text>

      {/* <Comp.TextInput placeholder="Email" widthSize="long" />
      <Comp.TextInput placeholder="Password" widthSize="long" /> */}

      <Comp.Button themeColor="theme.primary">Sign In</Comp.Button>

      <Link href="/resetPassword">
        <Comp.Text fontSize={theme.mediumText}>Forgot Password?</Comp.Text>
      </Link>
      <Link href="/signup">
        <Comp.Text fontSize={theme.mediumText}>New to Niyon? Join Now</Comp.Text>
      </Link>
    </Wrapper>
  );
}

export default Login;
