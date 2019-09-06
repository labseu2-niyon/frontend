import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '../~common';


function ExploreButtons({ numOfConnections }) {
  return <Link href="/connections"><Button primary>Connections ({numOfConnections})</Button></Link>;
}

ExploreButtons.propTypes = {
  numOfConnections: PropTypes.number.isRequired,
};

export default ExploreButtons;
