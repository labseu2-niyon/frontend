import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopSection from '../TopSection';
import ProfileList from './ProfileList';
import withUserData from '../containers/withUserData';
import ConnectionButtons from './ConnectionsButtons';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function Connections(props) {
  const connectionsLength = props.connectionsAll ? props.connectionsAll.length : 0;

  return (
    <Wrapper>
      <TopSection
        buttons={(
          <ConnectionButtons
            numOfConnections={connectionsLength}
          />
)}
        src="/static/friends-online.svg"
      />
      <ProfileList title="My Connections" users={props.connectionsAll || []} />
    </Wrapper>
  );
}

Connections.propTypes = {
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withUserData(Connections);
