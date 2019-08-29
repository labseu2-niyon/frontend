import styled from 'styled-components';
import StepsComp from './StepsComp';
import { Heading2, Text, Button } from '../~common/index';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router';

const Social = ({ errors, touched }) => {
  return (
    <Root>
      <StepsComp stepNumber="1" />
      <Heading2>Welcome</Heading2>
      <IconT className="far fa-user" />
      <FormArea>
        <InputWrapper>
          <Text small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nisl nisl, aliquam nec erat et, efficitur mollis metus.
          </Text>
          <Field name="username" type="text" placeholder="username" />
          {touched.username && errors.username && (
            <Error>{errors.username}</Error>
          )}
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
  mapPropsToValues({ username }) {
    return {
      username: username || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required')
  }),
  handleSubmit(values, { setStatus }) {
    console.log('Values: ', values);
    Router.push('/auth/location');
  }
})(Social);

export default FormikWithSocialForm;

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
`;
