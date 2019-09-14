import { useEffect } from 'react';
import Link from 'next/link';
import { List, Avatar } from 'antd';
import styled from 'styled-components';

const User = ({ user, socket, currentUser }) => {
  const handleEmit = () => {
    const dataForTheServer = {
      sender: currentUser,
      reciver: user.username,
      chatId: socket.id
    };

    console.log(dataForTheServer);

    socket.emit('chatOpen', dataForTheServer);
  };

  return (
    <Root onClick={handleEmit}>
      <Link href={`/chat/${user.username}`}>
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.profile_picture} />}
            title={<a href="https://ant.design">{user.first_name}</a>}
            // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      </Link>
    </Root>
  );
};

export default User;

const Root = styled.div`
  width: 100px;
`;
