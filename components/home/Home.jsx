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
  const connectionsLength = props.connectionsAll ? props.connectionsAll.length : 0;

  return (
    <Wrapper>
      <TopSection

        buttons={(
          <HomeButtons
            numOfConnections={connectionsLength}
          />
        )}
        src="/static/hacker.svg"
      />
      <ProfileList title="User Suggestions" users={props.users || []} expandable />
      <div style={{
        width: '100%', height: 1, background: '#eaeaea', border: 'none',
      }}
      />
      <ProfileList title="My Connections" users={props.users || []} expandable />
    </Wrapper>
  );
}

Home.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,

};

export default withUserData(Home);
