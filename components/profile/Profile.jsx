import React from 'react';
import styled from 'styled-components';
import PhotoSection from './PhotoSection';

const Container = styled.main`
    width: 100%;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    padding: 2rem 0;
`;

function Profile() {
  return (
    <Container>
      <PhotoSection />
    </Container>
  );
}

export default Profile;
