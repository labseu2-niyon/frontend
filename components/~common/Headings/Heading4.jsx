import React from 'react';
import styled from 'styled-components';

const H = styled.h4`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.h4};
`;

function Heading4({ children }) {
  return <H>{children}</H>;
}

export default Heading4;
