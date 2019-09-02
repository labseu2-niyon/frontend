import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../~common';

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function ProfileList() {
  return (
    <Wrapper>
      <Heading2>Suggested Users</Heading2>
    </Wrapper>
  );
}

export default ProfileList;
