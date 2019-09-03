import React from 'react';
import { withRouter } from 'next/router';
import withAuth from '../lib/withAuth';
import Layout from '../components/Layout';
import Profile from '../components/profile/Profile';

function ProfilePage(props) {
  // eslint-disable-next-line
  const userInfo = props.router.query;
  return (
    <Layout pageName="PROFILE">
      <Profile {...userInfo} />
    </Layout>
  );
}

export default withAuth(withRouter(ProfilePage));
