import { Heading2, Text, Button } from '../~common/index';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Router from 'next/router';
import Steps from './StepsComp';
import { connect } from 'react-redux';
import { emailSignup } from '../../redux/actions/authActions';

const Email = ({ errors, touched, loading, status }) => {
  //console.log(loading, status);
  return (
    <Root>
      <Steps stepNumber="1" />
      <Heading2 primary>Email login</Heading2>
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
    firstName: Yup.string()
      .matches(/^[A-Z]/, {
        message: 'Name must start with a capital letter',
        excludeEmptyString: true
      })
      .matches(/^([^0-9]*)$/, {
        message: 'Must contain only letters',
        excludeEmptyString: true
      })
      .required('Name is requried.'),
    lastName: Yup.string()
      .matches(/^[A-Z]/, {
        message: 'Name must start with a capital letter',
        excludeEmptyString: true
      })
      .matches(/^([^0-9]*)$/, {
        message: 'Must contain only letters',
        excludeEmptyString: true
      })
      .required('Name is requried.'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required')
  }),
  handleSubmit(values, { props, setStatus }) {
    props.emailSignup(values).then(res => {
      if (res === 201) {
        Router.push('/auth/location');
      } else {
        console.log('RESS', res);
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
  justify-content: center;
  height: 420px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 500px) {
    width: 50%;
  }

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

    @media (min-width: 500px) {
      width: 40%;
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
