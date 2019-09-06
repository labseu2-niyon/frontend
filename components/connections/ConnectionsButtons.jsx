import React from 'react';
import Link from 'next/link';
import { Button } from '../~common';

function ConnectionButtons() {
  return <Link href="/explore"><Button primary>Explore</Button></Link>;
}

export default ConnectionButtons;
