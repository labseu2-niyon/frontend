import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Button } from '../~common';
import { profile_placeholder } from '../../lib/utils';

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;

    @media (max-width: 600px) {
      flex-direction: column;
    }
`;

const PhotoWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Photo = styled.div`
    width: 175px;
    height: 175px;
    border-radius: 50%;
    background: #eaeaea;
    overflow: hidden;
`;

const ImgProfile = styled.img`
  object-fit: cover;
  width: 100%;
`;

const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function PhotoSection(props) {
  const { user, isLoggedInUser = false } = props;
  const userObj = {
    profile_picture: user.profile_picture || profile_placeholder,
    email: user.email || 'Not listed',
    first_name: user.first_name || 'No Name',
    last_name: user.last_name || '',
    job: user.job || 'Not listed',
  };

  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo>
          <ImgProfile src={userObj.profile_picture} alt="User Profile Picture" />
        </Photo>
      </PhotoWrapper>
      <TextWrapper>
        <Heading>{userObj.first_name} {userObj.last_name}</Heading>
        <p><strong>Email:</strong> {userObj.email}</p>
        <p><strong>Job:</strong> {userObj.job}</p>
      </TextWrapper>
      <ButtonWrapper>
        <Button small primary>{ isLoggedInUser ? 'Edit' : 'Connect'}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

PhotoSection.propTypes = {
  user: PropTypes.shape().isRequired,
  isLoggedInUser: PropTypes.bool,
};

export default PhotoSection;
