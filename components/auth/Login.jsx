import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Heading4, Text, Button } from '../~common/index';
import { logInUser } from '../../redux/actions/authActions';

const Login = ({ errors, touched }) => (
  <>
    <Root>
      <Heading4>Welcome Back</Heading4>
      <Text small>
        Do not miss your next opportunity. Sign in to stay updated on your
        professional world.
      </Text>
      <FormArea>
        <InputWrapper>
          <Field name="email" type="email" placeholder="email" />
          {touched.email && errors.email && <Error>{errors.email}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Field name="password" type="password" placeholder="password" />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </InputWrapper>
        <Button small primary type="submit">
          Log In
        </Button>
      </FormArea>
      <Text small>
        <Link href="/auth/reset-password">Forgot Password?</Link>
      </Text>
      <Text small>
        <Link href="/auth/signup">New to Niyon? Join now</Link>
      </Text>
    </Root>
  </>
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
  handleSubmit(values, { props }) {
    props.logInUser(values).then(res => {
      if (res === 200) {
        Router.push('/');
      }
    });
  }
})(Login);

function mapStateToProps(state) {
  return { authReducer: state.authReducer };
}

export default connect(
  mapStateToProps,
  { logInUser }
)(FormikLoginForm);

const Root = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const FormArea = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-center;
  height: 420px;

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 80%;
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
  position: absolute;
  bottom: 10%;
  left: 7.5%;
  color: #e29273;
`;
