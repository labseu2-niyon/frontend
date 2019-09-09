import React, { useEffect } from 'react';
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

const jobTitles = [
  'Technology',
  'Backend developer'
];

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

  useEffect(() => {

  }, [props.users]);


  return (
    <Wrapper>
      <TopSection
        buttons={<ExploreButtons numOfConnections={connectionsLength} />}
        src="/static/friends-online.svg"
      />
      <SearchBox jobTitles={jobTitles} filter={filter} />
      <ProfileList users={props.users} />
    </Wrapper>
  );
}

Explore.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setUsers: PropTypes.func.isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withUserData(Explore);
