import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Formik, Field } from 'formik';
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

const WrapperForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

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

      <Formik
        initialValues={{ Email: '', Password: '' }}
        render={() => (
          <WrapperForm onSubmit="">
            <Field
              name="email"
              type="email"
              render={() => (
                <Comp.TextInput placeholder="Email" widthSize="80%" />
              )}
            />
            <Field
              name="password"
              type="password"
              render={() => (
                <Comp.TextInput placeholder="Password" widthSize="80%" />
              )}
            />
            <Comp.Button primary>Sign In</Comp.Button>
          </WrapperForm>
        )}
      />

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
