import { Heading4, Text, Button } from '../~common/index';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const Email = () => {
  return (
    <Root>
      <h5>Progress Bar- Step1</h5>
      <Heading4>Email login</Heading4>
      <FormArea>
        <Field name="username" type="text" placeholder="username"></Field>
        <Field name="firstName" type="text" placeholder="First Name"></Field>
        <Field name="lastName" type="text" placeholder="Last Name"></Field>
        <Field name="email" type="email" placeholder="email"></Field>
        <Field name="password" type="password" placeholder="password"></Field>
        <Text small>Lorem Ipsum, terms and conditions, blah blah blah.</Text>
        <Button small primary>
          Register
        </Button>
      </FormArea>
      <Text>
        <Link href="/signupTest">Login with Social Media</Link>
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
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required')
  })
})(Email);

export default FormikWithEmailForm;

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
  justify-content: space-between;
  height: 380px;

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
