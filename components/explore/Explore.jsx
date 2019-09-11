import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopSection from '../TopSection';
import SearchBox from './SearchBox';
import ProfileList from './ProfileList';
import withUserData from '../containers/withUserData';
import ExploreButtons from './ExploreButtons';

const Wrapper = styled.main`
    width: 100%;
`;

function Explore(props) {
  const connectionsLength = props.connectionsAll ? props.connectionsAll.length : 0;

  const filter = (mentor, mentee) => {
    const filteredUsers = props.users.map((user) => {
      if (mentor && mentee) {
        return { ...user, display: true };
      }

      if (mentor && !mentee) {
        if (user.Mentor) {
          return { ...user, display: true };
        }
        return { ...user, display: false };
      }

      if (!mentor && mentee) {
        if (!user.Mentor) {
          return { ...user, display: true };
        }
        return { ...user, display: false };
      }

      if (!mentor && !mentee) {
        return { ...user, display: false };
      }

      return user;
    });

    props.setUsers(filteredUsers);
  };

  const filterJobTitle = (job) => {
    const filteredUsers = props.users.map(user => {
      if (user.job) {
        if (user.job.tech_name === job) {
          return { ...user, filtered: true };
        }
        return { ...user, filtered: false };
      }
      return { ...user, filtered: false };
    });

    props.setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <TopSection
        buttons={<ExploreButtons numOfConnections={connectionsLength} />}
        src="/static/friends-online.svg"
      />
      <SearchBox jobTitles={props.jobs} filter={filter} filterJobTitle={filterJobTitle} />
      <ProfileList users={props.users} />
    </Wrapper>
  );
}

Explore.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  jobs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setUsers: PropTypes.func.isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withUserData(Explore);
