import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Settings from '../components/settings/Settings';

function Page() {
  return (
    <Layout pageName="Settings">
      <Settings />
    </Layout>
  );
}

export default withAuth(Page);
