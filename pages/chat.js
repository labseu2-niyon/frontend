import withAuth from '../lib/withAuth';
import Layout2 from '../components/Layout2';
import ChatLayout from '../components/chat/ChatLayout';

const Page = props => (
  <Layout2 pageName="Chat">
    <ChatLayout socket={props.socket} />
  </Layout2>
);

export default withAuth(Page);
