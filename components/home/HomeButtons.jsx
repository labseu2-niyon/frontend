import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '../~common';

const ButtonWrapper = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 150px;
        height: 85px;
        flex-direction: column;
    }
`;

function HomeButtons({ numOfConnections }) {
  return (
    <ButtonWrapper>
      <Link href="/connections"><Button primary>Connections ({numOfConnections})</Button></Link>
      <Link href="/explore"><Button primary>Explore</Button></Link>
    </ButtonWrapper>
  );
}

HomeButtons.propTypes = {
  numOfConnections: PropTypes.number.isRequired,
};

export default HomeButtons;
