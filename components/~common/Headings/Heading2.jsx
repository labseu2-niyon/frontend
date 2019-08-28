import React from 'react';
import styled from 'styled-components';

const H = styled.h2`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.h2};
`;

function Heading2({ children }) {
  return <H>{children}</H>;
}

export default Heading2;
