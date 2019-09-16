import withAuth from '../lib/withAuth';
import Layout from '../components/Layout';
import ChatLayout from '../components/chat/ChatLayout';

const Page = props => (
  <Layout pageName="Chat">
    <ChatLayout socket={props.socket} />
  </Layout>
);

export default withAuth(Page);
