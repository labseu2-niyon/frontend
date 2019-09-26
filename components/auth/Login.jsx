/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Text } from '../~common/index';
import { logInUser } from '../../redux/actions/authActions';
import { getUrl } from '../../redux/actions/utils';
import Header from './Header';
import Card from './Card';
import Content from './ContentWrapper';
import FormStyles from './Form';
import SocialWrapper from './SocialWrapper';

const baseUrl = getUrl();

const Login = ({ errors, touched, loading, status }) => (
  <div>
    <Card>
      <Header />
      <Content>
        <h3>Login</h3>
        <p>Please enter your details to login:</p>
        <FormStyles>
          <div className="input-wrapper">
            <Field name="email" type="email" placeholder="Email" />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className="input-wrapper">
            <Field name="password" type="password" placeholder="Password" />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>
          {status && status.msg && <p className="error">{status.msg}</p>}

          <button type="submit">Login</button>
          <Link href="/auth/reset-password">
            <a>Forgot Password?</a>
          </Link>
        </FormStyles>
        <SocialWrapper baseUrl={baseUrl} type="Login"></SocialWrapper>
      </Content>
    </Card>
    <BottomWrapper>
      <p>
        Don't have an account?{' '}
        <Link href="/auth/signup">
          <a>Join Now</a>
        </Link>
      </p>
    </BottomWrapper>
  </div>
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

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;
