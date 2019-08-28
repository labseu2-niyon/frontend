import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Comp from '../components/~common/index';
import { theme } from '../lib/theme';

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const customStyles = {
  margin: theme.h1,
};

const WrapperForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const WrapperInput = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

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
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        // onSubmit={(values) => {
        //   console.log(values);
        // }}
        render={({
          values, errors, touched, handleSubmit, handleChange,
        }) => (
          <WrapperForm>
            <WrapperInput>
              <Comp.TextInput
                onChange={handleChange}
                value={values.email}
                border={
                  touched.email && errors.email && `1px solid ${theme.danger}`
                }
                type="text"
                name="email"
                placeholder="Email"
              />
              {touched.email && errors.email && (
              <Comp.Text fontSize={theme.smallText} color={theme.danger}>
                {errors.email}
              </Comp.Text>
              )}
            </WrapperInput>

            <WrapperInput>
              <Comp.TextInput
                onChange={handleChange}
                value={values.password}
                border={
                  touched.password
                  && errors.password
                  && `1px solid ${theme.danger}`
                }
                type="password"
                name="password"
                placeholder="Password"
              />
              {touched.password && errors.password && (
              <Comp.Text fontSize={theme.smallText} color={theme.danger}>
                {errors.password}
              </Comp.Text>
              )}
            </WrapperInput>

            <Comp.Button primary onClick={handleSubmit}>
              Sign In
            </Comp.Button>
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
