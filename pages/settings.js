import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Wrapper from '../components/settings/Wrapper';
import EditProfile from '../components/settings/EditProfile';
import EditPassword from '../components/settings/EditPassword';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function Page() {
  return (
    <Layout pageName="Settings">
      <Wrapper>
        <Tabs type="card">
          <TabPane tab="Edit Profile" key="1">
            <EditProfile />
          </TabPane>
          <TabPane tab="Change Password" key="2">
            <EditPassword />
          </TabPane>
        </Tabs>
      </Wrapper>
    </Layout>
  );
}

export default connect(
  null,
  {}
)(withAuth(Page));
