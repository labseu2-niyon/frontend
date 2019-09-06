import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopSection from './TopSection';
import ProfileList from './ProfileList';
import withUserData from '../containers/withUserData';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Home(props) {
  return (
    <Wrapper>
      <TopSection numOfConnections={props.connectionsAll.length} />
      <ProfileList title="UserSuggestions" users={props.usersAll || []} />
      <div
        style={{
          width: '100%',
          height: 1,
          background: '#eaeaea',
          border: 'none'
        }}
      />
      <ProfileList title="My Connections" users={props.connectionsAll || []} />
    </Wrapper>
  );
}

Home.propTypes = {
  usersAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default withUserData(Home);
