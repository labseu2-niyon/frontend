import styled from 'styled-components';
import Steps from './StepsComp';
import { Heading2, Button, Text } from '../~common/index';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const JobTitle = ({ touched, errors }) => {
  return (
    <Root>
      <Steps stepNumber="3" />
      <Heading2>Mentorship Info</Heading2>
      <Text small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        nisl, aliquam nec erat et, efficitur mollis metus.
      </Text>
      <MentorIcons>
        <Costum>
          <i className="fas fa-user-graduate fa-6x"></i>
          <Info>
            <p>Mentee</p>
            <i className="fas fa-info-circle"></i>
          </Info>
        </Costum>
        <Costum>
          <i className="fas fa-user-cog fa-6x"></i>
          <Info>
            <p>Mentor</p>
            <i className="fas fa-info-circle"></i>
          </Info>
        </Costum>
      </MentorIcons>

      <FormArea>
        <Field component="select" name="food">
          <option>Job Title</option>
          <option value="Job1">Web Developer</option>
          <option value="Job2">Computer Science</option>
          <option value="Job3">Data Science</option>
        </Field>
        <Button small primary type="submit">
          Next
        </Button>
      </FormArea>
    </Root>
  );
};

const FormikWithJobTitleForm = withFormik({
  mapPropsToValues({ city }) {
    return {};
  },
  validationSchema: Yup.object().shape({
    city: Yup.string().required('City name is required')
  }),
  handleSubmit(values) {
    console.log(values);
    Router.push('/auth/job-title');
  }
})(JobTitle);

export default FormikWithJobTitleForm;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MentorIcons = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  position: relative;
  i {
    color: grey;
  }
`;

const Costum = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Info = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 3px;
  align-items: center;

  i {
    padding-left: 5px;
    color: black;
  }
`;

const FormArea = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;

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

  select {
    display: block;
    font-size: 14px;
    line-height: 1.3;
    padding: 0.6em 1.4em 0.5em 0.8em;
    width: 75%;
    border: 1px solid rgba(77, 45, 82, 0.8);
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    @media (min-width: 500px) {
      width: 70%;
    }
    option {
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
