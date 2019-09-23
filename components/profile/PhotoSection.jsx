import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Button } from '../~common';

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
  const { profileUser, isLoggedInUser = false } = props;
  const userObj = {
    profile_picture: profileUser.profile_picture || 'https://image.flaticon.com/icons/svg/660/660611.svg',
    email: profileUser.email || 'Not listed',
    first_name: profileUser.first_name || 'No Name',
    last_name: profileUser.last_name || '',
    job: profileUser.job ? profileUser.job.tech_name : 'Not listed',
  };

  const clickHandler = () => {
    switch (props.status.text) {
      case 'ACCEPT':
        return props
          .connectionFunctions
          .acceptConnection(props.status.id, props.profileUser);
      case 'CONNECT':
        return props
          .connectionFunctions
          .createConnection({
            senderUserId: props.user.id,
            requestUserId: props.profileUser.id,
            profileUser: props.profileUser
          });
      default:
        return props
          .connectionFunctions
          .createConnection({
            senderUserId: props.user.id,
            requestUserId: props.profileUser.id,
            profileUser: props.profileUser
          });
    }
  };

  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo>
          <img src={userObj.profile_picture} alt="" height="100%" />
        </Photo>
      </PhotoWrapper>
      <TextWrapper>
        <Heading>{userObj.first_name} {userObj.last_name}</Heading>
        <p>{userObj.job}</p>
      </TextWrapper>
      <ButtonWrapper>
        { isLoggedInUser
          ? <Button small primary>Edit</Button>
          : <Button small primary onClick={clickHandler}>{props.connected ? 'Connected' : props.status.text}</Button>}
      </ButtonWrapper>
    </Wrapper>
  );
}

PhotoSection.propTypes = {
  connected: PropTypes.number.isRequired,
  status: PropTypes.shape().isRequired,
  profileUser: PropTypes.shape().isRequired,
  isLoggedInUser: PropTypes.bool.isRequired,
  connectionFunctions: PropTypes.shape(PropTypes.func).isRequired,
};

export default PhotoSection;
