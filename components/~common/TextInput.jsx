import React from 'react';
import styled from 'styled-components';

const I = styled.input`
	width: ${({ widthSize }) => widthSize || '20%'};
	max-height: 100%;
	border-radius: 10px;
	padding: 0.5rem;
	margin: 0.5rem;
`;

function TextInput(props) {
	const { customStyles, password, short, half, long } = props;

	let size;
  if (short) {
    size = '10%';
  } else if (half) {
    size = '50%';
  } else if (long) {
    size = '90%';
  }

	if (password) {
		return (
			<div>
				<I
					type="password"
					placeholder="password"
					widthSize={size}
					{...props}
					{...customStyles}
				/>
			</div>
		);
	}

	return <I placeholder="text input" widthSize={size} {...props} {...customStyles} />;
}

export default TextInput;
