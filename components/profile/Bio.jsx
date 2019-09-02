import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: pink;
`;

const BioSection = styled.div`
    width: 650px;
    max-width: 90%;
    background: red;
`;

function Bio({ text = ['hello', 'here we go'] }) {
  return (
    <Wrapper>
      <BioSection>
        {text.map((line) => <p>{line}</p>)}
      </BioSection>
    </Wrapper>
  );
}

Bio.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Bio;
