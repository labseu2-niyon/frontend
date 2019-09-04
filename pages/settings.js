import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Wrapper from '../components/settings/Wrapper';
import EditProfile from '../components/settings/EditProfile';
import axiosWithToken from '../redux/axios';

function Page({ user }) {
  return (
    <Layout pageName="Settings">
      <Wrapper>
        <EditProfile user={user} />
      </Wrapper>
    </Layout>
  );
}

Page.getInitialProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { username } = jwt.decode(cookies.token);

  const res = await axiosWithToken(ctx).get(
    `https://niyon-dev.herokuapp.com/api/user/${username}/profile`,
  );

  return { user: res.data.data };
};

Page.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default withAuth(Page);
