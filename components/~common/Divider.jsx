import React from 'react';
import styled from 'styled-components';

const D = styled.hr`
  width: ${({ widthSize }) => widthSize || '100%'};
  border: ${({ theme }) => `0.5px solid ${theme.grey}`};
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
