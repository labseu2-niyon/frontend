import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Router from 'next/router';
import { Heading4, Text, Button } from '../~common/index';

const ResetPassword = ({ errors, touched }) => (
  <>
    <Root>
      <Heading4>Let us find your account</Heading4>
      <Text small>Please enter your email</Text>
      <FormArea>
        <InputWrapper>
          <Field name="email" type="email" placeholder="email" />
          {touched.email && errors.email && <Error>{errors.email}</Error>}
        </InputWrapper>
        <ButtonArea>
          <Link href="/auth/email-sent">
            <Button large primary type="submit">
              Find Account
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button large secondary>
              Cancel
            </Button>
          </Link>
        </ButtonArea>
      </FormArea>
    </Root>
  </>
);

const FormikResetPasswordForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),
  handleSubmit(values) {
    console.log(values);
    Router.push('/user/dashboard');
  },
})(ResetPassword);

export default FormikResetPasswordForm;

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

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 320px;
`;
