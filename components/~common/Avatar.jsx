import React from 'react';
import styled from 'styled-components';

const A = styled.img`
  width: ${({ widthSize }) => widthSize || '64px'};
  border-radius: 50%;
`;

const Avatar = props => {
  const { large, medium, small, children, source, extraLarge } = props;

  let size;
  if (large) {
    size = '88px';
  } else if (medium) {
    size = '58px';
  } else if (small) {
    size = '28px';
  } else if (extraLarge) {
    size = '120px';
  }

  return (
    <A widthSize={size} src={source}>
      {children}
    </A>
  );
};

export default Avatar;
