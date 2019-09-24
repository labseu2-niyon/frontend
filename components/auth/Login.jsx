/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Heading2, Text, Button } from '../~common/index';
import { logInUser } from '../../redux/actions/authActions';
import { getUrl } from '../../redux/actions/utils';
import Logo from '../~common/Logo';

const baseUrl = getUrl();

const Login = ({ errors, touched, loading, status }) => (
  <Root>
    <Logo />

    <TopWrapper>
      <Heading2 primary>Login</Heading2>
    </TopWrapper>
    <FormArea>
      <SocialWrapper>
        <a href={`${baseUrl}/auth/facebook`}>
          <StyledImage
            src="../../static/social/social-facebook.png"
            alt="facebook"
          />
        </a>

        <a href={`${baseUrl}/auth/github`}>
          <StyledImage
            src="../../static/social/social-github.png"
            alt="github"
          />
        </a>

        <a href={`${baseUrl}/auth/google`}>
          <StyledImage
            src="../../static/social/social-google.png"
            alt="google"
          />
        </a>
      </SocialWrapper>
      <InputWrapper>
        <Field name="email" type="email" placeholder="email" />
        {touched.email && errors.email && <Error>{errors.email}</Error>}
      </InputWrapper>
      <InputWrapper>
        <Field name="password" type="password" placeholder="password" />
        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        {status && status.msg && <Error>{status.msg}</Error>}
      </InputWrapper>
      <InputWrapper>
        <Button small primary type="submit" loadingB={loading}>
          Log In
        </Button>
      </InputWrapper>
    </FormArea>
    <BottomWrapper>
      <Text small>
        <Link href="/auth/reset-password">Forgot Password?</Link>
      </Text>
      <Text small>
        <Link href="/auth/signup">New to Niyon? Join now</Link>
      </Text>
    </BottomWrapper>
  </Root>
);

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit(values, { props, setStatus }) {
    props.logInUser(values).then(res => {
      if (res.status === 200) {
        Router.push('/');
      } else {
        setStatus({ msg: 'Incorrect email or password. Please try again.' });
      }
    });
  }
})(Login);

function mapStateToProps(state) {
  return { authReducer: state.authReducer, loading: state.authReducer.loading };
}

export default connect(
  mapStateToProps,
  { logInUser }
)(FormikLoginForm);

const Root = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
  }
  margin: 0 auto;
`;

const FormArea = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30%;
  width: 100%;
  max-width: 200px;

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 100%;
    display: block;
    color: #4d2d52;
    border: 1px solid rgba(77, 45, 82, 0.8);
    border-radius: 4px;
    ::placeholder {
      color: grey;
      opacity: 0.4;
    }
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledImage = styled.img`
  width: 3rem;
  margin: 0 0.8rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 30px;
`;

const Error = styled.p`
  margin: 0;
  font-size: 14px;
  bottom: 10%;
  left: 15%;
  color: #e29273;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 2rem;

  h2 {
    text-align: center;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;
