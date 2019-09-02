import React from 'react';
import styled from 'styled-components';
import PhotoSection from './PhotoSection';
import Bio from './Bio';

const Container = styled.main`
    width: 100%;
`;

function Profile() {
  return (
    <Container>
      <PhotoSection />
      <Bio />
    </Container>
  );
}

export default Profile;
