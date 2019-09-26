import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '../~common';
import { theme } from '../../lib/theme';

const ButtonWrapper = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.mobileWidth}) {
        width: 100%;
        height: 85px;
        flex-direction: column;
    }
`;

function HomeButtons({ numOfConnections }) {
  return (
    <ButtonWrapper>
      <Link href="/connections"><Button primary>Connections&nbsp;<small>({numOfConnections})</small></Button></Link>
      <Link href="/explore"><Button primary>Explore</Button></Link>
    </ButtonWrapper>
  );
}

HomeButtons.propTypes = {
  numOfConnections: PropTypes.number.isRequired,
};

export default HomeButtons;
