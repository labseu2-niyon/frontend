import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  visibility: ${({ visibility }) => visibility};
`;

const Text = props => {
  const { large, medium, regular, small, children, customStyles } = props;

  let size;
  if (large) {
    size = '20px';
  } else if (medium) {
    size = '18px';
  } else if (regular) {
    size = '16px';
  } else if (small) {
    size = '14px';
  }

  return (
    <P fontSize={size} {...customStyles} {...props}>
      {children}
    </P>
  );
};

export default Text;
