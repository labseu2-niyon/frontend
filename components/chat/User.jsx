import { useState } from 'react';
import Link from 'next/link';
import { List, Avatar } from 'antd';
import styled from 'styled-components';
import { saveCurrentRequestId } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import { theme } from '../../lib/theme';

const User = ({
  user,
  socket,
  currentUser,
  saveCurrentRequestId,
  active,
  onClick
}) => {
  const handleEmit = () => {
    onClick();
    saveCurrentRequestId(user.id);

    const dataForTheServer = {
      chatId: user.connectionId
    };
    socket.emit('chatOpen', dataForTheServer);
  };

  return (
    <Root onClick={handleEmit} selected={active}>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={user.profile_picture} />}
          title={`${user.first_name} ${user.last_name}`}
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
  width: 100%;
  padding-left: 10px;
  color: ${theme.primary};
  background-color: ${props => (props.selected ? theme.secondary : 'white')};
  &:hover {
    cursor: pointer;
  }
  transition: 1s all;
`;
