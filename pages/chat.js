import withAuth from '../lib/withAuth';
import Chat from '../components/chat/Chat';
import Layout from '../components/Layout';

const Page = props => {
  return (
    <>
      {/* <Layout> */}
      <Chat></Chat>

      {/* </Layout> */}
    </>
  );
};

export default withAuth(Page);
