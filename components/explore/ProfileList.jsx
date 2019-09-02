import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../~common';
import ExploreCard from './ExploreCard';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Profiles = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const profiles = [{
  name: 'Andy',
  field: 'Whaler',
  description: 'I\'m andy the whaler',
  src: '',
  position: 'Whaley Whaler',
  location: 'Japan',
},
{
  name: 'Bob',
  field: 'Porker',
  description: 'I\'m andy the whaler',
  src: '',
  position: 'Whaley Whaler',
  location: 'Japan',
}];

function ProfileList() {
  return (
    <Wrapper>
      <Heading2>Suggested Users</Heading2>
      <Profiles>
        { profiles.map((profile) => <ExploreCard {...profile} />) }
      </Profiles>
    </Wrapper>
  );
}

export default ProfileList;
