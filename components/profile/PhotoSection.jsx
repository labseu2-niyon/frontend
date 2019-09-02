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
`;

const ButtonWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function PhotoSection({ user, job, src }) {
  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo>
          <img src={src} alt="" height="100%" />
        </Photo>
      </PhotoWrapper>
      <TextWrapper>
        <Heading>{user}</Heading>
        <p>{job}</p>
      </TextWrapper>
      <ButtonWrapper>
        <Button small primary>Connect</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

PhotoSection.propTypes = {
  job: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default PhotoSection;
