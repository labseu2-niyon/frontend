import React from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Button, Text } from '../~common/index';
import { updatePassword } from '../../redux/actions/userActions';

const Container = styled.main`
  width: 100%;
`;

const Settings = () => (
  <Container>
    <FormArea>
      <Text small>
        Type your email below. A link to change your password will be sent.
      </Text>
      <InputWrapper>
        <Field name="email" type="email" placeholder="email" />
      </InputWrapper>
      <Button small primary type="submit">
        Send Link
      </Button>
    </FormArea>
  </Container>
);

const FormikLoginForm = withFormik({
  mapPropsToValues({ email }) {
    return {
      email: email || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.email().required('Email is required'),
  }),
  handleSubmit(values, { props }) {
    const { email } = values;
    props.updatePassword({ email });
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
