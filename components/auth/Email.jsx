import { useState } from 'react';
import { Heading2, Text, Button } from '../~common/index';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Router from 'next/router';
import Steps from './StepsComp';
import { connect } from 'react-redux';
import { emailSignup } from '../../redux/actions/authActions';

const Email = ({ errors, touched, status }) => {
  return (
    <Root>
      <Steps stepNumber="1" />
      <Heading2>Email login</Heading2>
      <FormArea>
        <InputWrapper>
          <Field name="username" type="text" placeholder="username" />
          {touched.username && errors.username && (
            <Error>{errors.username}</Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Field name="firstName" type="text" placeholder="First Name" />
          {touched.firstName && errors.firstName && (
            <Error>{errors.firstName}</Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Field name="lastName" type="text" placeholder="Last Name" />
          {touched.lastName && errors.lastName && (
            <Error>{errors.lastName}</Error>
          )}
        </InputWrapper>
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
        <Text small>Lorem Ipsum, terms and conditions, blah blah blah.</Text>
        <Button small primary type="submit" loading={status}>
          Register
        </Button>
      </FormArea>
      <Text small>
        <Link href="/auth/signup">
          <a>Login with Social Media</a>
        </Link>
      </Text>
    </Root>
  );
};

const FormikWithEmailForm = withFormik({
  mapPropsToValues({ username, firstName, lastName, email, password }) {
    return {
      username: username || '',
      firstName: firstName || '',
      lastName: lastName || '',
      email: email || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required')
  }),
  handleSubmit(values, { props, setStatus }) {
    //setStatus(values);
    setStatus({ loading: false });

    props.emailSignup(values).then(res => {
      console.log(res);
      if (res.status === 201) {
        setStatus({ loading: true });
        Router.push('/auth/location');
      } else if (res.name === 'Error') {
        setStatus({ loading: false });
      }
    });

    //setSubmitting(false);
  }
})(Email);

export default connect(
  state => state,
  { emailSignup }
)(FormikWithEmailForm);

const Root = styled.div`
  height: 95vh;
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
