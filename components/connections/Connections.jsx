import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopSection from './TopSection';
import ProfileList from './ProfileList';
import { fetchAllUsers, fetchAllConnections } from '../../redux/actions/userActions';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function Connections(props) {
  useEffect(() => {
    if (!props.connectionsAll) {
      props.fetchConnections();
    }
  }, []);

  console.log(props.connectionsAll);

  return (
    <Wrapper>
      <TopSection numOfConnections={props.connectionsAll.length} />
      <ProfileList title="My Connections" users={props.connectionsAll || []} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => state.userReducer;

Connections.propTypes = {
  fetchConnections: PropTypes.func.isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, { fetchUsers: fetchAllUsers, fetchConnections: fetchAllConnections })(Connections);
