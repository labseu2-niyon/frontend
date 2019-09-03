import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Wrapper from '../components/settings/Wrapper';
import EditProfile from '../components/settings/EditProfile';

function Page() {
  return (
    <Layout pageName="Settings">
      <Wrapper>
        <EditProfile />
      </Wrapper>
    </Layout>
  );
}

export default withAuth(Page);
