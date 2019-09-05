import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Connections from '../components/connections/Connections';

function Page() {
  return (
    <Layout pageName="Connections">
      <Connections />
    </Layout>
  );
}

export default withAuth(Page);
