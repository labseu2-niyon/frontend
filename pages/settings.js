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

function Page({ user, fetchUser, username }) {
  useEffect(() => {
    if (!user) return fetchUser(username);
  }, []);

  return (
    <Layout pageName="Settings">
      <Wrapper>
        <EditProfile user={user} />
      </Wrapper>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withAuth(Page));

Page.getInitialProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { username } = jwt.decode(cookies.token);
  return { username };
};

Page.propTypes = {
  user: PropTypes.shape(),
  username: PropTypes.string.isRequired,
  fetchUser: PropTypes.func.isRequired,
};
