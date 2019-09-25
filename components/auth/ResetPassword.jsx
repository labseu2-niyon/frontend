import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Heading2, Text, Button } from '../~common/index';
import { resetPassword } from '../../redux/actions/authActions';
import Logo from '../~common/Logo';
import Card from './Card';

const ResetPassword = ({ errors, touched, status, loading }) => (
  <Card>
    <Logo></Logo>

    <TopWrapper>
      <Heading2 primary>Let's find your account.</Heading2>
      <Text small>Please enter your email.</Text>
    </TopWrapper>
    <FormArea>
      <InputWrapper>
        <Field name="email" type="email" placeholder="email" />
        {touched.email && errors.email && <Error>{errors.email}</Error>}
        {status && status.msg && <Error>{status.msg}</Error>}
      </InputWrapper>
      <ButtonArea>
        <Button large primary loadingB={loading} type="submit">
          Find Account
        </Button>
        <Link href="/auth/login">
          <a>
            <Button large secondary>
              Go Back
            </Button>
          </a>
        </Link>
      </ButtonArea>
    </FormArea>
  </Card>
);

const FormikResetPasswordForm = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
  }),
  handleSubmit(values, { props, setStatus }) {
    const { email } = values;
    props.resetPassword({ email, props }).then(res => {
      setStatus({ msg: res });
    });
  }
})(ResetPassword);

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    error: state.authReducer.error,
    loading: state.authReducer.loading
  };
}

export default connect(
  mapStateToProps,
  { resetPassword }
)(FormikResetPasswordForm);

const FormArea = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-center;
  height: 40%;
  width: 100%;

  @media (min-width: 500px) {
    width: 50%;
  }

  @media (min-width: 950px) {
    width: 30%;
  }

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 70%;
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
  left: 15%;
  color: #e29273;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 320px;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    text-align: center;
  }
`;
