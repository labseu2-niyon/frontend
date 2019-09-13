import UserList from './UserList';
import { useEffect } from 'react';
// Will it be protected or not?
// import axiosWithToken from '../redux/axios';

const Chat = () => {
  //   useEffect = () => {
  //     // Fetch messages
  //     // Return Messages
  //   };

  return (
    <div>
      <UserList></UserList>
      <p>I'm the chat window</p>
    </div>
  );
};

export default Chat;
