import Layout from '../components/layout/Layout';
import withAuth from '../lib/withAuth';

function Page() {
  return (
    <Layout pageName="Explore">
      <div>User lists page!</div>
    </Layout>
  );
}

export default withAuth(Page);
