import React from 'react';
import styled from 'styled-components';
import { Button } from '../~common/index';

const Container = styled.main`
  width: 100%;
`;

function Profile() {
  return (
    <Container>
      <Button>Update Password</Button>
    </Container>
  );
}

export default Profile;
