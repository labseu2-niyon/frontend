import { useEffect } from 'react';
import withAuth from '../../lib/withAuth';
import Chat from '../../components/chat/Chat';
import UserList from '../../components/chat/UserList';
// import Layout from '../components/Layout';

const Page = props => {
  // console.log(props);
  useEffect(() => {
    console.log(props.socket)
    props.socket.on('Delba', (msg) => {
      console.log(msg);
    });
  }, []);
  return (
    <>
      {/* <Layout> */}
      <UserList />
      <Chat />
      {/* </Layout> */}
    </>
  );
};

// Page.getInitialProps = async ({ req }) => {
//   // Get username from token
//   // Fetch data

//   const messages = 'Array of messages';

//   const users = 'Array of users';

//   return { users, messages };
// };

export default withAuth(Page);
