import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import { Heading2 } from '../~common';
import ExploreCard from '../explore/ExploreCard';

const Wrapper = styled.section`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const Profiles = styled.div`
  box-sizing: border-box;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 0 0.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function ProfileList({ users }) {
  return (
    <Wrapper>
      <Head>
        <title> Niyon Connections Page</title>
      </Head>
      <Heading2>My Connections</Heading2>
      <Profiles>
        { users.map((profile) => <ExploreCard {...profile} />) }
      </Profiles>
    </Wrapper>
  );
}

ProfileList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProfileList;
