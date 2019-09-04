import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Heading4, Button } from '../~common/index';
import { changePassword } from '../../redux/actions/authActions';

const ChangePassword = ({ errors, touched }) => (
  <>
    <Root>
      <Heading4>Here you can change your password</Heading4>
      <FormArea>
        <InputWrapper>
          <Field name="password" type="password" placeholder="new password" />
          {touched.password && errors.password && (
            <Error>{errors.password}</Error>
          )}
        </InputWrapper>
        <ButtonArea>
          <Button large primary type="submit">
            Change Password
          </Button>
        </ButtonArea>
      </FormArea>
    </Root>
  </>
);

const FormikChangePasswordForm = withFormik({
  mapPropsToValues({ password }) {
    return {
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required('Password is required'),
  }),
  handleSubmit(values, { props }) {
    const { password } = values;
    props.changePassword({ password });
  },
})(ChangePassword);

function mapStateToProps(state) {
  return { authReducer: state.authReducer };
}

export default connect(
  mapStateToProps,
  { changePassword },
)(FormikChangePasswordForm);

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
