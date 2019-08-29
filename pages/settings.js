import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';

function Page() {
  return <Layout pageName="Settings" />;
}

export default withAuth(Page);
