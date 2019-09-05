import { useEffect } from 'react';
import styled from 'styled-components';
import StepsComp from './StepsComp';
import { Heading2, Text, Button } from '../~common/index';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';
import { connect } from 'react-redux';
import { socialData } from '../../redux/actions/authActions';
import { AutoComplete } from 'antd';

const Social = ({ errors, touched, username }) => {
  return (
    <Root>
      <StepsComp stepNumber="1" />
      <Heading2 primary>Welcome</Heading2>
      <IconT className="far fa-user" />
      <FormArea>
        <InputWrapper>
          <Text small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nisl nisl, aliquam nec erat et, efficitur mollis metus.
          </Text>
          <Field
            name="username"
            type="text"
            placeholder="username"
            value={username}
            disabled
          />
        </InputWrapper>
        <InputWrapper>
          <Field name="firstName" type="text" placeholder="FirstName" />
          {touched.firstName && errors.firstName && (
            <Error>{errors.firstName}</Error>
          )}
        </InputWrapper>
        <InputWrapper>
          <Field name="lastName" type="text" placeholder="lastName" />
          {touched.lastName && errors.lastName && (
            <Error>{errors.lastName}</Error>
          )}
        </InputWrapper>
        <Button primary small type="submit">
          Next
        </Button>
      </FormArea>
    </Root>
  );
};

const FormikWithSocialForm = withFormik({
  mapPropsToValues({ username, firstName, lastName }) {
    return {
      username: username || '',
      firstName: firstName || '',
      lastName: lastName || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string(),
    firstName: Yup.string()
      .matches(/^([^0-9]*)$/, {
        message: 'Must contain only letters',
        excludeEmptyString: true
      })
      .required('First Name is requried.'),
    lastName: Yup.string()
      // .matches(/^[A-Z]/, {
      //   message: 'Name must start with a capital letter',
      //   excludeEmptyString: true
      // })
      .matches(/^([^0-9]*)$/, {
        message: 'Must contain only letters',
        excludeEmptyString: true
      })
      .required('Last Name is requried.')
  }),
  handleSubmit(values, { props, setStatus }) {
    props.socialData(values);
    Router.push('/auth/location');
    setStatus(values);
  }
})(Social);

const mapStateToProps = state => {
  return {
    username: state.authReducer.emailData.username
  };
};
const mapDispatchToProps = {
  socialData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikWithSocialForm);

const Root = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 0 20px;
    text-align: center;
  }
`;

const IconT = styled.i`
  font-size: 100px;
  color: green;
`;

const FormArea = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;

  @media (min-width: 500px) {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
      width: 50%;
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
  bottom: 6%;
  left: 3%;
  color: #e29273;

  @media (min-width: 500px) {
    left: 20%;
  }
`;
