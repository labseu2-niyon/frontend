import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading2, Button } from '../~common';
import ExploreCard from '../explore/ExploreCard';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
`;

const Profiles = styled.div`
  max-height: ${({ expanded }) => (!expanded ? '475px' : '1000px')};
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  transition: max-height 500ms;
  transition-timing-function: linear;
`;

const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  height: 1px;
  background: #eaeaea;
  width: 80%;
  z-index: -1;
`;

function UserSuggestions({ title, users }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Wrapper>
      <Heading2>{title}</Heading2>
      <Profiles expanded={expanded}>
        { users.map((profile) => <ExploreCard {...profile} />) }
      </Profiles>
      <ButtonWrapper>
        <Line />
        <Button primary onClick={() => setExpanded(!expanded)}>{!expanded ? 'More' : 'Less'}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

UserSuggestions.propTypes = {
  title: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default UserSuggestions;
