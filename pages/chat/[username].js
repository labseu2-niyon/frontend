import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ChatLayout from '../../components/chat/ChatLayout';
import withAuth from '../../lib/withAuth';

const Page = props => {
  const router = useRouter();

  return (  
    <Layout>
      <ChatLayout socket={props.socket}></ChatLayout>
    </Layout>
  );
};

export default withAuth(Page);
