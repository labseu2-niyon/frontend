import React from 'react';
import styled from 'styled-components';

const H = styled.h3`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.h3};

  @media (max-width: ${({ theme }) => theme.tabletWidth}) {
    margin-right: 30px;
    font-size: 10px;
  }
`;

function Heading3({ children }) {
  return <H>{children}</H>;
}

export default Heading3;
