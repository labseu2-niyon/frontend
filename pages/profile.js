import React from 'react';
import withAuth from '../lib/withAuth';
import Layout from '../components/Layout';
import Profile from '../components/profile/Profile';


function ProfilePage() {
  return (
    <Layout pageName="PROFILE">
      <Profile />
    </Layout>
  );
}

export default withAuth(ProfilePage);
