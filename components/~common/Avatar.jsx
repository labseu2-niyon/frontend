import React from 'react';
import styled from 'styled-components';

const A = styled.img`
  width: ${({ widthSize }) => widthSize || '64px'};
  border-radius: 50%;
`;

const Avatar = props => {
  const { large, regular, small, children, customStyles, src, extra } = props;

  let size;
  if (large) {
    size = '80px';
  } else if (regular) {
    size = '64px';
  } else if (small) {
    size = '40px';
  } else if (extra) {
    size = '100px';
  }

  return (
    <A widthSize={size} {...customStyles} {...props} src={src}>
      {children}
    </A>
  );
};

export default Avatar;
