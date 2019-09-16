import { useState } from 'react';
import Link from 'next/link';
import { List, Avatar } from 'antd';
import styled from 'styled-components';

const User = ({ user, socket, currentUser }) => {
  const [selected, setSelected] = useState(false);

  console.log('USER ', user);
  const handleEmit = () => {
    setSelected(true);
    const dataForTheServer = {
      chatId: user.connectionId
    };
    console.log(dataForTheServer);
    socket.emit('chatOpen', dataForTheServer);
  };

  return (
    <Root onClick={handleEmit} selected={selected}>
      {/* <Link
        href={{
          pathname: `/chat/${user.requestUser.username}`,
          query: { id: `${user.requestUser.id}` }
        }}
      > */}
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={user.requestUser.profile_picture} />}
          title={user.requestUser.username}
          //description="Ant Design"
        />
      </List.Item>
      {/* </Link> */}
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
