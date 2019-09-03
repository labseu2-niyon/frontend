import React from 'react';
import styled from 'styled-components';
import PhotoSection from './PhotoSection';
import Bio from './Bio';

const Container = styled.main`
    width: 100%;
`;


const bioData = {
  position: 'Mentor',
  location: 'San Fransisco',
  text: ['Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Veniam aliquam similique ipsa omnis commodi, consequuntur assumenda quos porro eligendi, in odio mollitia optio doloremque laborum vitae, obcaecati quo ratione culpa.'],
};

function Profile(props) {
  return (
    <Container>
      <PhotoSection {...props} />
      <Bio {...bioData} />
    </Container>
  );
}

export default Profile;
