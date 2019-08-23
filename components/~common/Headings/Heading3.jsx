import React from 'react';
import styled from 'styled-components';

const H = styled.h3`
  box-sizing: border-box;
  margin: 4px 0;
  /* font-size: 24px; */
  font-size: 3rem;
  font-weight: bold;
`;

function Heading3({ children }) {
  return <H>{children}</H>;
}

export default Heading3;
