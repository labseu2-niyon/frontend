import React from 'react';
import styled from 'styled-components';
import TopSection from './TopSection';
import SearchBox from './SearchBox';
import ProfileList from './ProfileList';

const Wrapper = styled.main`
    width: 100%;
`;

const jobTitles = [{ value: 'hello', label: 'hi' }, { value: 'Bonjour', label: 'salut' }];

function Explore() {
  return (
    <Wrapper>
      <TopSection />
      <SearchBox jobTitles={jobTitles} />
      <ProfileList />
    </Wrapper>
  );
}

export default Explore;
