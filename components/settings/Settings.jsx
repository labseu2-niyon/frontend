import React from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Button } from '../~common/index';
import { updatePassword } from '../../redux/actions/userActions';

const Container = styled.main`
  width: 100%;
`;

const Settings = () => (
  <Container>
    <FormArea>
      <InputWrapper>
        <Field name="password" type="password" placeholder="new password" />
      </InputWrapper>
      <Button small primary type="submit">
        Update Password
      </Button>
    </FormArea>
  </Container>
);

const FormikLoginForm = withFormik({
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
    const { token } = props.authReducer;
    props.updatePassword({ password, token });
    Router.push('/settings');
  },
})(Settings);

function mapStateToProps(state) {
  return { authReducer: state.authReducer };
}

export default connect(
  mapStateToProps,
  { updatePassword },
)(FormikLoginForm);

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
