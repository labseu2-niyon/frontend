import withAuth from '../lib/withAuth';
import Layout from '../components/Layout';
import ChatLayout from '../components/chat/ChatLayout';

const Page = props => {
  return (
    <Layout pageName="Chat">
      <ChatLayout socket={props.socket}></ChatLayout>
    </Layout>
  );
};

export default withAuth(Page);
