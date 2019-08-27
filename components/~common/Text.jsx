import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  margin: ${({ margin }) => margin || '15px'};
`;

const Text = props => {
  const {
    large,
    medium,
    small,
    light,
    regular,
    bold,
    margin,
    children
  } = props;

  let size;
  if (large) {
    size = '1.2rem';
  } else if (medium) {
    size = '1rem';
  } else if (small) {
    size = '0.875rem';
  }

  let weight;
  if (light) {
    weight = 300;
  } else if (regular) {
    weight = 400;
  } else if (bold) {
    weight = 600;
  }

  return (
    <P fontSize={size} fontWeight={weight} margin={margin}>
      {children}
    </P>
  );
};

export default Text;
