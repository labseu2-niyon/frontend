import React from 'react';
import { withRouter } from 'next/router';
import withAuth from '../lib/withAuth';
import Layout from '../components/Layout';
import MyProfile from '../components/profile/MyProfile';

function ProfilePage(props) {
  // eslint-disable-next-line
  const userInfo = props.router.query;
  return (
    <Layout pageName="PROFILE">
      <MyProfile {...userInfo} />
    </Layout>
  );
}

export default withRouter(withAuth(ProfilePage));
