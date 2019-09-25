import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Heading3, Button } from '../~common/index';
import { changePassword } from '../../redux/actions/authActions';
import { theme } from '../../lib/theme';
import PropTypes from 'prop-types';
import Header from './Header';
import Card from './Card';
import FormStyles from './Form';
import Content from './ContentWrapper';

const ChangePassword = ({
  errors,
  touched,
  loading,
  message,
  error,
  status
}) => {
  return (
    <Card>
      <Header />
      <Content>
        <h4>Please enter your new password:</h4>

        <FormStyles>
          <div>
            <Field name="password" type="password" placeholder="New Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <div>
            <Field
              name="confirm"
              type="password"
              placeholder="Confirm Passsword"
            />
            {touched.confirm && errors.confirm && <p>{errors.confirm}</p>}
          </div>
          <button type="submit">Change my password</button>
          {status && <h4>Your was changed successfully!</h4>}
        </FormStyles>
      </Content>
    </Card>
  );
};

const FormikChangePasswordForm = withFormik({
  mapPropsToValues({ password, confirm }) {
    return {
      password: password || '',
      confirm: confirm || ''
    };
  },
  validationSchema: Yup.object().shape({
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
    const { password } = values;
    const params = new URL(document.location).searchParams;
    const token = params.get('token');
    props.changePassword({ password, token }).then(res => setStatus(res));
  }
})(ChangePassword);

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    loading: state.authReducer.loading,
    message: state.authReducer.message,
    error: state.authReducer.error
  };
}

export default connect(
  mapStateToProps,
  { changePassword }
)(FormikChangePasswordForm);

FormikChangePasswordForm.propTypes = {
  message: PropTypes.string,
  error: PropTypes.string
};
