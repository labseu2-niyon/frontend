import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import PhotoSection from './PhotoSection';
import Bio from './Bio';
import withUserData from '../containers/withUserData';

const Container = styled.main`
    width: 100%;
`;

const getTextReceived = (obj) => {
  switch (true) {
    case obj && obj.accepted:
      return 'CONNECTED';
    case obj && obj.pending:
      return 'ACCEPT';
    default:
      return 'CONNECT';
  }
};

const getTextSent = (obj) => {
  switch (true) {
    case obj && obj.accepted:
      return 'CONNECTED';
    case obj && obj.pending:
      return 'PENDING';
    default:
      return 'CONNECT';
  }
};

const getStatus = (obj, id) => {
  const sent = obj.sent ? obj.sent.filter(each => each.connection.id === id) : [];
  const received = obj.received ? obj.received.filter(each => each.connection.id === id) : [];
  const rec = received[0];
  const sen = sent[0];
  if (received.length) {
    const text = getTextReceived(rec);
    return { received: true, text, id: rec && rec.id };
  }

  const text = getTextSent(sen);

  return { received: false, text, id: sen && sen.id };
};

function Profile(props) {
  const [profileUser, setProfileUser] = useState(null);
  const [connected, setConnected] = useState(0);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const user = props.usersAll.filter(u => u.id === parseInt(props.router.query.id, 10))[0];
    const status = getStatus(props.connectionsReceived, user.id);
    const isConnected = props.connectionsAll.filter(each => each.username === user.username).length;
    setConnected(isConnected);
    setStatus(status);
    setProfileUser(user);
  }, [props.usersAll, props.connectionsReceived, props.connectionsAll]);

  if (!profileUser) {
    return 'loading';
  }

  return (
    <Container>
      <PhotoSection
        user={props.user}
        profileUser={profileUser}
        status={status}
        connected={connected}
        connectionFunctions={props.connectionFunctions}
      />
      <Bio user={profileUser} />
    </Container>
  );
}

Profile.propTypes = {
  user: PropTypes.shape().isRequired,
  usersAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  connectionsAll: PropTypes.arrayOf().isRequired,
  connectionsReceived: PropTypes.arrayOf().isRequired,
  router: PropTypes.shape().isRequired,
  connectionFunctions: PropTypes.shape(PropTypes.func).isRequired,
};

export default withUserData(withRouter(Profile));
