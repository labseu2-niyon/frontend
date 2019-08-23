import React from 'react';
import styled from 'styled-components';

const IBox = styled.textarea`
	max-width: 100%;
	max-height: 100%;
	border-radius: 10px;
	padding: 0.5rem;
	margin: 0.5rem;
`;

function TextBox(props) {
  const { customStyles, form } = props;

	return <IBox placeholder='text box' form={form} {...props} {...customStyles} />;
}

export default TextBox;
