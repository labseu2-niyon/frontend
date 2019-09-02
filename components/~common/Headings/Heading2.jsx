import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../lib/theme';

const H = styled.h2`
  margin: 10px 0;
  font-size: ${({ theme }) => theme.h2};
  color: ${({ themeColor }) => `${themeColor}`};
`;

function Heading2({ children, primary, secondary, warning, danger }) {
  let color;
  if (primary) {
    color = `${theme.primary}`;
  } else if (secondary) {
    color = `${theme.secondary}`;
  } else if (warning) {
    color = `${theme.warning}`;
  } else if (danger) {
    color = `${theme.danger}`;
  }
  return <H themeColor={color}>{children}</H>;
}

export default Heading2;
