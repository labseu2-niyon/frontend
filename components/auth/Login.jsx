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
  <Card>
    <Header />
    <Content>
      <h3>Welcome</h3>
      <p>Please enter your details to login:</p>

      <FormStyles>
        <div>
          <Field name="email" type="email" placeholder="Email" />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <Field name="password" type="password" placeholder="Password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        {status && status.msg && <p>{status.msg}</p>}

        <button type="submit">Login</button>
        <Link href="/auth/reset-password">
          <a>Forgot Password?</a>
        </Link>
      </FormStyles>
      <SocialWrapper baseUrl={baseUrl} type="Login"></SocialWrapper>

      <BottomWrapper>
        <p>
          Don't have an account?{' '}
          <Link href="/auth/signup">
            <a>Join Now</a>
          </Link>
        </p>
      </BottomWrapper>
    </Content>
  </Card>
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
  margin: 30px 0;
`;
