import React from 'react';
import styled from 'styled-components';

const D = styled.hr`
	width: 90%;
	color: #f7f7f7;
	align-content: center;
`;

function Divider(props) {
	const { customStyles } = props;

	return <D {...props} {...customStyles} />;
}

export default Divider;
