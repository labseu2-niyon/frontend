import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
`;

const Text = props => {
  const { large, medium, small, children } = props;

  let size;
  if (large) {
    size = '1.2rem';
  } else if (medium) {
    size = '1rem';
  } else if (small) {
    size = '0.875rem';
  }

  return <P fontSize={size}>{children}</P>;
};

export default Text;
