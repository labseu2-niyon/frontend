import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Wrapper from '../components/settings/Wrapper';
import EditProfile from '../components/settings/EditProfile';
import { fetchUser } from '../redux/actions/userActions';

function Page() {
  return (
    <Layout pageName="Settings">
      <Wrapper>
        <EditProfile />
      </Wrapper>
    </Layout>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth(Page));

Page.propTypes = {
  user: PropTypes.shape(),
  username: PropTypes.string.isRequired,
  fetchUser: PropTypes.func.isRequired
};
