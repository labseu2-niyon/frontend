import React from 'react';
import styled from 'styled-components';

const IBox = styled.textarea`
  width: ${({ widthSize }) => widthSize || '20%'};
  max-height: 100%;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
`;

function TextBox(props) {
  const {
 customStyles, form, short, half, long 
} = props;

  let size;
  if (short) {
    size = '10%';
  } else if (half) {
    size = '50%';
  } else if (long) {
    size = '90%';
  }

  let rows = '5';
  if (short) {
    rows = '3';
  } else if (half) {
    rows = '10';
  } else if (long) {
    rows = '20';
  }

  return (
    <IBox
      placeholder="text box"
      widthSize={size}
      rows={rows}
      form={form}
      {...props}
      {...customStyles}
    />
  );
}

export default TextBox;
