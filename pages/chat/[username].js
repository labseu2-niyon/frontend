import Layout from '../../components/Layout';
import ChatLayout from '../../components/chat/ChatLayout';
import withAuth from '../../lib/withAuth';

const Page = props =>
// const router = useRouter();

  (
    <Layout>
      <ChatLayout socket={props.socket} />
    </Layout>
  );
export default withAuth(Page);
