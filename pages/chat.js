import withAuth from '../lib/withAuth';

import ChatData from '../components/ChatData';
import ChatLayout from '../components/chat/ChatLayout';

const Page = props => (
  <div>
    {/* This component is important for getting connections to work, it fetches the
    user data on the background (not the connections) and saves it to the redux store. I don't really
    know why it works the way it does... all I know is that it only works a sibling and not a parent component,
    (it messes up the socket.on event if it's a parent). Some weird Socket.io behaviour for sure.
    I've had many sleepless nights.   */}
    <ChatData> </ChatData>
    <ChatLayout socket={props.socket} />
  </div>
);

export default withAuth(Page);
