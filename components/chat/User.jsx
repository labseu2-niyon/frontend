import { useState } from 'react';
import Link from 'next/link';
import { List, Avatar } from 'antd';
import styled from 'styled-components';
import { saveCurrentRequestId } from '../../redux/actions/authActions';
import { connect } from 'react-redux';

const User = ({ user, socket, currentUser, saveCurrentRequestId }) => {
  const [selected, setSelected] = useState(false);

  const handleEmit = () => {
    saveCurrentRequestId(user.requestUser.id);
    setSelected(true);
    const dataForTheServer = {
      chatId: user.connectionId
    };
    socket.emit('chatOpen', dataForTheServer);
  };

  return (
    <Root onClick={handleEmit} selected={selected}>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={user.requestUser.profile_picture} />}
          title={user.requestUser.username}
        />
      </List.Item>
    </Root>
  );
};

export default connect(
  state => state,
  { saveCurrentRequestId }
)(User);

const Root = styled.div`
  width: 100px;
  /* background-color: ${props => (props.selected ? 'lightGrey' : 'white')}; */
  &:hover {
    cursor: pointer;
  }
`;
