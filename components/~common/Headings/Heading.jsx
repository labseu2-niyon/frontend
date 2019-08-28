import React from 'react';
import styled from 'styled-components';

const H = styled.h1`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.h1};
`;

function Heading({ children }) {
  return <H>{children}</H>;
}

export default Heading;
