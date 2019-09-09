import React from 'react';
import styled from 'styled-components';

const AWrapper = styled.div`
  width: ${({ size }) => size || '64px'};
  height: ${({ size }) => size || '64px'};
  background: #eaeaea;
  border-radius: 50%; 
`;

const A = styled.img`
  width: ${({ widthSize }) => widthSize || '64px'};
  border-radius: 50%;
`;

const Avatar = props => {
  const {
    large, medium, small, children, source, extraLarge
  } = props;

  let size;
  if (large) {
    size = '90px';
  } else if (medium) {
    size = '60px';
  } else if (small) {
    size = '30px';
  } else if (extraLarge) {
    size = '120px';
  }

  return (
    <AWrapper size={size}>
      <A widthSize={size} src={source}>
        {children}
      </A>
    </AWrapper>
  );
};

export default Avatar;
