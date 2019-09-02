import React from 'react';
import styled from 'styled-components';
import TopSection from './TopSection';
import SearchBox from './SearchBox';
import ProfileList from './ProfileList';

const Wrapper = styled.main`
    width: 100%;
`;

const jobTitles = [
  { value: 'hello', label: 'hi' },
  { value: 'Bonjour', label: 'salut' },
];

const users = [{
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
},
{
  name: 'Reggie',
  field: 'Fisherman',
  description: 'I\'m andy the whaler',
  src: '',
  position: 'Fishy Fisher',
  location: 'France',
}];

function Explore() {
  return (
    <Wrapper>
      <TopSection />
      <SearchBox jobTitles={jobTitles} />
      <ProfileList users={users} />
    </Wrapper>
  );
}

export default Explore;
