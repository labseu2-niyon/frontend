import React from 'react';
import styled from 'styled-components';

const I = styled.input`
	max-width: 100%;
	max-height: 100%;
	border-radius: 10px;
	padding: 0.5rem;
	margin: 0.5rem;
`;

const Img = styled.img`
	max-height: 5%;
	max-width: 5%;
`;

function TextInput(props) {
	const { customStyles, password } = props;

	if (password) {
		return (
			<div>
				<I
					type="password"
					{...props}
					{...customStyles}
					placeholder="password"
				/>
			</div>
		);
	}

	return <I {...props} {...customStyles} placeholder="text input" />;
}

export default TextInput;
