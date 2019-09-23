import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PhotoSection from './PhotoSection';
import Bio from './Bio';
import { fetchReceivedConnections, fetchUser } from '../../redux/actions/userActions';

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
  const sent = obj.sent.filter(each => each.connection.id === id);
  const received = obj.sent.filter(each => each.connection.id === id);
  if (received.length) {
    const text = getTextReceived(received[0]);
    return { received: true, text };
  }

  const text = getTextSent(sent[0]);

  return { received: false, text };
};

function Profile(props) {
  const [status, setStatus] = useState({ received: null, text: 'CONNECT' });
  useEffect(() => {
    props.getConnections(props.userReducer.user.id);
  }, [props.userReducer.user]);

  useEffect(() => {
    const s = getStatus(props.userReducer.connectionsReceived, parseInt(props.id, 10));
    setStatus(s);
  }, [props.userReducer.connectionsReceived]);

  return (
    <Container>
      <PhotoSection user={props} status={status} />
      <Bio user={props} />
    </Container>
  );
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  getUser: PropTypes.func.isRequired,
  getConnections: PropTypes.func.isRequired,
  userReducer: PropTypes.arrayOf().isRequired
};

const mapStateToProps = ({ userReducer }) => ({ userReducer });

export default connect(mapStateToProps, { getUser: fetchUser, getConnections: fetchReceivedConnections })(Profile);
