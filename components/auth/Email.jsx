import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import Steps from './Steps';
import { emailSignup } from '../../redux/actions/authActions';
import Card from './Card';
import FormStyles from './Form';
import Content from './ContentWrapper';

const Email = ({ errors, touched, loading, status }) => {
  return (
    <main>
      <Steps stepNumber="1" />
      <Card>
        <Content>
          <h3>Register with email:</h3>
          <FormStyles>
            <div>
              <Field name="username" type="text" placeholder="username" />
              {touched.username && errors.username && <p>{errors.username}</p>}
            </div>
            <div>
              <Field name="email" type="email" placeholder="email" />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <Field name="password" type="password" placeholder="password" />
              {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
            <div>
              <Field
                name="confirm"
                type="password"
                placeholder="confirm password"
              />
              {touched.confirm && errors.confirm && <p>{errors.confirm}</p>}
            </div>

            <button type="submit">Register</button>
          </FormStyles>
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
        </Content>
      </Card>
      <BottomWrapper>
        <Link href="/auth/signup">
          <a>Sign up with social media</a>
        </Link>
      </BottomWrapper>
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

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  a {
    color: #348fbb;
  }
`;
