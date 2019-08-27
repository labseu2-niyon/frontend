import { Heading4, Text, Button } from '../~common/index';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';

const Email = () => {
  return (
    <Root>
      <h5>Progress Bar- Step1</h5>
      <Heading4>Email login</Heading4>
      <FormArea>
        <Field name="username" type="text" placeholder="username"></Field>
        <Field name="firstName" type="text" placeholder="First Name"></Field>
        <Field name="lastName" type="text" placeholder="Last Name"></Field>
        <Field name="email" type="email" placeholder="email"></Field>
        <Field name="password" type="password" placeholder="password"></Field>
        <Text small>Lorem Ipsum, terms and conditions, blah blah blah.</Text>
        <Button large primary>
          Register
        </Button>
      </FormArea>
      <Text>Login with Social Media</Text>
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
  }
})(Email);

export default FormikWithEmailForm;

const Root = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FormArea = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 320px;
`;
