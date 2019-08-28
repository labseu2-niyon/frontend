import React from 'react';
import styled from 'styled-components';

const D = styled.hr`
  width: ${({ widthSize }) => widthSize || '100%'};
  border: 0.5px solid #e2e2e2;
  align-content: center;
`;

function Divider(props) {
  const { full, half, short } = props;

  let size;
  if (short) {
    size = '25%';
  } else if (half) {
    size = '50%';
  } else if (full) {
    size = '100%';
  }

  return <D widthSize={size} />;
}

export default Divider;
