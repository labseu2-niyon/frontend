import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Heading2 } from '../~common';
import Link from 'next/link';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const BioSection = styled.div`
  position: absolute;
  top: -40px;
  box-sizing: border-box;
  width: 650px;
  max-width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;

  p {
    word-break: break-all;
  }
`;

const Location = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
  }

  i {
    padding-top: 0px;
    margin-right: 10px;
  }
`;

const Social = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 10px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    border: none;
    background: none;
    align-items: center;
    justify-content: center;
    color: #484848;
    cursor: pointer;
  }

  button:hover {
    color: #000;
  }

  i {
    margin-top: 5px;
    margin-left: 1px;
    font-size: 18px;
  }
`;

function Bio(props) {
  const { user } = props;
  console.log(user);
  const loco = user.location
    ? `${user.location.city_name}, ${user.location.country_name}`
    : 'No location given';

  const facebook = user.social_media ? `${user.social_media.facebook}` : '';
  const github = user.social_media ? `${user.social_media.github}` : '';
  const linkedin = user.social_media ? `${user.social_media.linkedin}` : '';
  const twitter = user.social_media ? `${user.social_media.twitter}` : '';

  return (
    <Wrapper>
      <BioSection>
        <Location>
          <div>
            <Icon type="book" />
            {user.Mentor ? 'Mentor' : 'Mentee'}
          </div>
          <div>
            <Icon type="global" />
            {loco}
          </div>
        </Location>
        <Heading2>Bio</Heading2>
        <p>{user.biography}</p>
        <Social>
          <a href={linkedin} target="_blank">
            <button type="button">
              <Icon type="linkedin" size="large" />
            </button>
          </a>
          <a href={twitter} target="_blank">
            <button type="button">
              <Icon type="twitter" />
            </button>
          </a>
          <a href={facebook} target="_blank">
            <button type="button">
              <Icon type="facebook" />
            </button>
          </a>
          <a href={github} target="_blank">
            <button type="button">
              <Icon type="github" />
            </button>
          </a>
        </Social>
      </BioSection>
    </Wrapper>
  );
}

Bio.propTypes = {
  user: PropTypes.shape().isRequired
};

export default Bio;
