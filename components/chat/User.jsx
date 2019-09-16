import { useState } from 'react';
import Link from 'next/link';
import { List, Avatar } from 'antd';
import styled from 'styled-components';

const User = ({ user, socket, currentUser }) => {
  const [selected, setSelected] = useState(false);
  const handleEmit = () => {
    setSelected(true);
    const dataForTheServer = {
      sender: currentUser.id,
      reciver: user.id,
      chatId: socket.id
    };
    console.log(dataForTheServer);
    socket.emit('chatOpen', dataForTheServer);
  };

  return (
    <Root onClick={handleEmit} selected={selected}>
      <Link
        href={{
          pathname: `/chat/${user.username}`,
          query: { id: `${user.id}` }
        }}
      >
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.profile_picture} />}
            title={<a href="">{user.first_name}</a>}
            //description="Ant Design"
          />
        </List.Item>
      </Link>
    </Root>
  );
};

export default User;

const Root = styled.div`
  width: 100px;
  /* background-color: ${props => (props.selected ? 'lightGrey' : 'white')}; */
  &:hover {
    cursor: pointer;
  }
`;
