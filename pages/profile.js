import React from 'react';
import withAuth from '../lib/withAuth';
import Layout from '../components/Layout';


function Profile() {
  return (
    <Layout pageName="PROFILE" />
  );
}

export default withAuth(Profile);
