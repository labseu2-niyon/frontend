import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Wrapper from '../components/settings/Wrapper';
import EditPassword from '../components/settings/EditPassword';

function Page({ username }) {
  return (
    <Layout pageName="Settings">
      <Wrapper>
        <EditPassword username={username} />
      </Wrapper>
    </Layout>
  );
}

Page.getInitialProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const { username } = jwt.decode(cookies.token);
  return { username };
};

Page.propTypes = {
  username: PropTypes.string.isRequired,
};

export default withAuth(Page);
