import React from 'react';
import styled from 'styled-components';

const H = styled.h3`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.h3};
`;

function Heading3({ children }) {
  return <H>{children}</H>;
}

export default Heading3;
