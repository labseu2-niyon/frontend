import React from 'react';
import styled from 'styled-components';

const I = styled.input``;

function Checkbox(props) {
  const { customStyles } = props;

  return <I {...props} type="checkbox" {...customStyles} />;
}

export default Checkbox;
