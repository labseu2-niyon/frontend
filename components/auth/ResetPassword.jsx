import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/actions/authActions';
import Header from './Header';
import Card from './Card';
import Content from './ContentWrapper';
import FormStyles from './Form';
import { lighten } from 'polished';

const ResetPassword = ({ errors, touched, status, loading }) => (
  <Card>
    <Header></Header>
    <Content>
      <h4>First, let's find your account</h4>
      <FormStyles>
        <div className="input-wrapper">
          <Field name="email" type="email" placeholder="email" />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          {status && status.msg && <p className="error">{status.msg}</p>}
        </div>

        <button type="submit">Find Account</button>
      </FormStyles>

      <Link href="/auth/login">
        <a>
          <Button>Go Back</Button>
        </a>
      </Link>
    </Content>
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

const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  color: white;
  border: none;
  background: #859755;
  margin-top: 20px;

  cursor: pointer;
  &:hover {
    background: ${lighten(0.1, '#859755')};
  }
  transition: background 1s ease;

  &:first-child {
    margin-bottom: 15px;
  }
`;
