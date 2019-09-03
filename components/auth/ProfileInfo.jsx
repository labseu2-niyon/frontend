import { useState } from 'react';
import { Text, Button, Heading2, Skip } from '../~common/index';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Steps from './StepsComp';
import Router from 'next/router';
import { connect } from 'react-redux';
import { profileData, userProfileInfo } from '../../redux/actions/authActions';

const ProfileInfo = props => {
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const handleImageUpload = () => {
    const data = new FormData();
    data.append('file', image);
    return data;
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(bio);
    const data = {
      fistName: props.userInfo.socialData.firstName,
      lastName: props.userInfo.socialData.lastName,
      bio: bio,
      countryName: props.userInfo.locationData.country,
      cityName: props.userInfo.locationData.city
    };
    const username = props.userInfo.emailData.username;
    console.log(data, username);
    props.userProfileInfo(data, username).then(res => {
      if (res === 200) {
        Router.push('/auth/social-info');
      }
    });
  };

  // const sendImage = e => {
  //   e.preventDefault();
  //   console.log('Send Image');
  // };

  return (
    <Root>
      <Steps stepNumber="4" />
      <Heading2 primary>Show Us your face</Heading2>
      <FormArea onSubmit={handleSubmit}>
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
        <textarea
          type="text"
          placeholder="Biography"
          onChange={e => setBio(e.target.value)}
        />
        <Button small primary type="submit" loadingB={props.loading}>
          Next
        </Button>
        <Skip href="/auth/social-info"></Skip>
        {/* {error && <p>{error}</p>} */}
      </FormArea>
    </Root>
  );
};

const mapPropsToProps = state => {
  return {
    userInfo: state.authReducer,
    loading: state.authReducer.loading,
    error: state.authReducer.error
  };
};

export default connect(
  mapPropsToProps,
  { profileData, userProfileInfo }
)(ProfileInfo);

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

const FormArea = styled.form`
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
