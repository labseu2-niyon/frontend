import Layout from '../components/Layout/Layout';
import withAuth from '../lib/withAuth';

function Page() {
  return <Layout pageName="Connections" />;
}

export default withAuth(Page);
