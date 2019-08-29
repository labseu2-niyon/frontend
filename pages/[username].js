import Layout from '../components/layout/Layout';
import withAuth from '../lib/withAuth';

function Page() {
  return (
    <Layout pageName="Profile">
      <div>Profile Page</div>
    </Layout>
  );
}

export default withAuth(Page);
