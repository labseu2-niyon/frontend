import withAuth from '../lib/withAuth';
import ChatLayout from '../components/chat/ChatLayout';

const Page = props => <ChatLayout socket={props.socket} />;

export default withAuth(Page);
