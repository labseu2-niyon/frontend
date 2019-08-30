import { useState, useEffect } from 'react';
import { Text, Button, Heading2, Skip } from '../~common/index';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Steps from './StepsComp';
import Router from 'next/router';
import { connect } from 'react-redux';
import { profileData } from '../../redux/actions/authActions';

const ProfileInfo = ({ status, profileData }) => {
  const [image, setImage] = useState('');
  const handleImageUpload = () => {
    const data = new FormData();
    data.append('file', image);
    return data;
  };

  useEffect(() => {
    console.log('Statusss', status);
    if (status) {
      status.image = handleImageUpload(image);
      // console.log(status);
      profileData(status);
    }
  }, [status]);

  return (
    <Root>
      <Steps stepNumber="4" />
      <Heading2>Show Us your face</Heading2>
      <FormArea>
        <RoundIcon>
          <Input
            accept="image/*"
            id="image"
            type="file"
            onChange={e => setImage(e.target.files[0])}
          />
          <label htmlFor="image">
            <i
              className="fas fa-user-plus fa-4x"
              style={{ color: image && 'green' }}
            ></i>
          </label>
        </RoundIcon>
        <Text small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Field
          component="textarea"
          type="text"
          name="bio"
          placeholder="Biography"
        />
        <Button small primary type="submit">
          Next
        </Button>
        <Skip href="/auth/social-info"></Skip>
      </FormArea>
    </Root>
  );
};

const FormikWithProfileInfoForm = withFormik({
  mapPropsToValues({ bio }) {
    return {
      bio: bio || ''
    };
  },
  validationSchema: Yup.object().shape({}),
  handleSubmit(values, { setStatus }) {
    setStatus(values);
    Router.push('/auth/social-info');
  }
})(ProfileInfo);

export default connect(
  state => state,
  { profileData }
)(FormikWithProfileInfoForm);

const Root = styled.div`
  height: 97vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0 20px;
    text-align: center;
  }
`;

const RoundIcon = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const FormArea = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 470px;

  @media (min-width: 500px) {
    width: 50%;
  }

  textarea {
    padding: 0.5rem;
    font-size: 16px;
    width: 70%;
    height: 120px;
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

const Input = styled.input`
  width: 100%;
  height: 100%;
  color: grey;
  position: absolute;
  opacity: 0;
`;
