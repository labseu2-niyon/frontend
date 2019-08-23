import React from 'react';
import styled from 'styled-components';

const H = styled.h1`
  box-sizing: border-box;
  margin: 8px 0;
  font-size: 4rem;
  font-weight: bold;
`;

function Heading({ children }) {
  return <H>{children}</H>;
}

export default Heading;
