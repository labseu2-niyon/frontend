import React from 'react';
import styled from 'styled-components';

const H = styled.h4`
  box-sizing: border-box;
  margin: 8px 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

function Heading4({ children }) {
  return <H>{children}</H>;
}

export default Heading4;
