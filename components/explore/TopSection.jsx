import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Button } from '../~common';

const Wrapper = styled.section`
    box-sizing: border-box;
    width: 100%;
    padding: 4rem 0;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;

    p {
        line-height: 1.5;
    }
`;

function TopSection({ numOfConnections = 0 }) {
  return (
    <Wrapper>
      <Heading>Connect With Anyone</Heading>
      <p>
        Niyon is a platform for connecting young professionals<br />
with mentors in West Africa.
      </p>
      <Button primary>Connections ({numOfConnections})</Button>
    </Wrapper>
  );
}

TopSection.propTypes = {
  numOfConnections: PropTypes.number.isRequired,
};

export default TopSection;
