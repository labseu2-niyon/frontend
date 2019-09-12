import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	max-height: 100%;
	max-width: 50%;
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 25px;
	margin: 0.5rem;
`;

const I = styled.input`
  width: 90%;
	max-width: 100%;
	max-height: 100%;
  border: none;
  padding: 0.5rem;
`;

const Img = styled.img`
	max-height: 10%;
	max-width: 10%;
`;

const searchRef = React.createRef();

function handleClick(e) {
	e.preventDefault();
	searchRef.current.value = '';
}

function Search(props) {
	const { customStyles } = props;
	const placeholder = 'Enter your search term';

	return (
		<Container>
			<Img src="../static/icons/search.png" alt="search" />
			<I
				ref={searchRef}
				{...props}
				placeholder={placeholder}
				{...customStyles}
			/>
			<Img src="../static/icons/clear.png" alt="clear" onClick={handleClick} />
		</Container>
	);
}

export default Search;
