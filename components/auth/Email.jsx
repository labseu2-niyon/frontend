import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import Steps from './Steps';
import { Heading2, Text, Button } from '../~common/index';
import { emailSignup } from '../../redux/actions/authActions';
import Card from './Card';

const Email = ({ errors, touched, loading, status }) => {
  return (
    <main>
      <Steps stepNumber="1" />
      <Card>
        <FormArea>
          <Heading2 primary>Register</Heading2>
          <InputWrapper>
            <Field name="username" type="text" placeholder="username" />
            {touched.username && errors.username && (
              <Error>{errors.username}</Error>
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
          <InputWrapper>
            <Field
              name="confirm"
              type="password"
              placeholder="confirm password"
            />
            {touched.confirm && errors.confirm && (
              <Error>{errors.confirm}</Error>
            )}
          </InputWrapper>

          <Button small primary type="submit" loadingB={loading}>
            Register
          </Button>
          {/* {error && <Error style={{ textAlign: 'center' }}>{error}</Error>} */}
        </FormArea>
        {status && (
          <p
            style={{
              margin: '5px 10px',
              textAlign: 'center',
              fontSize: '14px',
              color: 'red'
            }}
          >
            {status}
          </p>
        )}
        <Text small>
          <Link href="/auth/signup">
            <a>Sign up with Social Media</a>
          </Link>
        </Text>
      </Card>
    </main>
  );
};

const FormikWithEmailForm = withFormik({
  mapPropsToValues({ username, email, password, confirm }) {
    return {
      username: username || '',
      email: email || '',
      password: password || '',
      confirm: confirm || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .matches(/^[a-zA-Z0-9]*$/, {
        message: 'Only alphanumerical characters allowed',
        excludeEmptyString: true
      })
      .required('Username is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirm: Yup.string()
      .required()
      .label('Confirm password')
      .test('passwords-match', 'Passwords must match', function(value) {
        return this.parent.password === value;
      })
  }),
  handleSubmit(values, { props, setStatus }) {
    const data = {
      username: values.username,
      email: values.email,
      password: values.password
    };
    props.emailSignup(data).then(res => {
      if (res === 201) {
        Router.push('/auth/social');
      } else {
        //still need to check the new error for already existing user
        setStatus(res);
      }
    });
  }
})(Email);

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.error
  };
};

export default connect(
  mapStateToProps,
  { emailSignup }
)(FormikWithEmailForm);

const FormArea = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  background: white;
  border-radius: 5px;

  input {
    padding: 0.5rem;
    font-size: 16px;
    width: 80%;
    display: block;
    color: #e8e8e8;
    border: 2px solid #e8e8e8;
    border-radius: 4px;
    ::placeholder {
      color: grey;
      opacity: 0.4;
    }

    @media (min-width: 500px) {
      width: 80%;
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
  left: 10%;
  color: #e29273;
`;
