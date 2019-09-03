import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Wrapper from '../components/settings/Wrapper';
import EditPassword from '../components/settings/EditPassword';

function Page() {
  return (
    <Layout pageName="Settings">
      <Wrapper>
        <EditPassword />
      </Wrapper>
    </Layout>
  );
}

export default withAuth(Page);
