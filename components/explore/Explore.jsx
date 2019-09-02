import React from 'react';
import styled from 'styled-components';
import TopSection from './TopSection';
import SearchBox from './SearchBox';
import ProfileList from './ProfileList';

const Wrapper = styled.main`
    width: 100%;
`;

function Explore() {
  return (
    <Wrapper>
      <TopSection />
      <SearchBox />
      <ProfileList />
    </Wrapper>
  );
}

export default Explore;
