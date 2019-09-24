import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Heading3, Button } from '../~common/index';
import { changePassword } from '../../redux/actions/authActions';
import { theme } from '../../lib/theme';
import PropTypes from 'prop-types';
import Logo from '../~common/Logo';

const ChangePassword = ({
  errors,
  touched,
  loading,
  message,
  error,
  status
}) => {
  return (
    <>
      <Root>
        <Logo />
        <TopWrapper>
          <Heading3 primary>Please enter your new password.</Heading3>
        </TopWrapper>
        <FormArea>
          <InputWrapper>
            <Field name="password" type="password" placeholder="new password" />
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
          {status && (
            <h3 style={{ color: theme.secondary, textAlign: 'center' }}>
              Password was reset succesfully !
            </h3>
          )}
          <ButtonArea>
            <Button large primary loadingB={loading} type="submit">
              Change my password
            </Button>
          </ButtonArea>
        </FormArea>
      </Root>
    </>
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
  height: 50%;
  width: 100%;

  @media (min-width: 500px) {
    width: 50%;
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
  margin-top: 60px;
  margin-bottom: 20px;

  p {
    text-align: center;
  }
`;
