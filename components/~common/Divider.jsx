import React from 'react';
import styled from 'styled-components';

const D = styled.hr`
  width: ${({ widthSize }) => widthSize || '90%'};
  color: #f7f7f7;
  align-content: center;
`;

function Divider(props) {
  const {
 customStyles, full, half, short 
} = props;

  let size;
  if (short) {
    size = '25%';
  } else if (half) {
    size = '50%';
  } else if (full) {
    size = '100%';
  }

  return <D widthSize={size} {...props} {...customStyles} />;
}

export default Divider;
