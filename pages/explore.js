import Layout from '../components/Layout';
import withAuth from '../lib/withAuth';
import Explore from '../components/explore/Explore';

function Page() {
  return (
    <Layout pageName="Explore">
      <Explore />
    </Layout>
  );
}

export default withAuth(Page);
