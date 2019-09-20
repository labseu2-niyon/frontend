import React from 'react';
import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Home from '../components/home/Home';

function Page(props) {
  console.log(props.socket);
  return (
    <Layout pageName="Home">
      <Home />
    </Layout>
  );
}

export default withAuth(Page);
