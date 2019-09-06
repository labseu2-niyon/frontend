import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopSection from '../TopSection';
import ProfileList from './ProfileList';
import withUserData from '../containers/withUserData';
import HomeButtons from './HomeButtons';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function Home(props) {
  return (
    <Wrapper>
      <TopSection buttons={<HomeButtons numOfConnections={props.connectionsAll.length} />} src="/static/hacker.svg" />
      <ProfileList title="UserSuggestions" users={props.users || []} />
      <div style={{
        width: '100%', height: 1, background: '#eaeaea', border: 'none',
      }}
      />
      <ProfileList title="My Connections" users={props.users || []} />
    </Wrapper>
  );
}

Home.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withUserData(Home);
