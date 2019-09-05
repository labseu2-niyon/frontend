import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TopSection from './TopSection';
import SearchBox from './SearchBox';
import ProfileList from './ProfileList';
import { fetchAllUsers, fetchAllConnections } from '../../redux/actions/userActions';

const Wrapper = styled.main`
    width: 100%;
`;

const jobTitles = [
  { value: 'whaler', label: 'Whaler' },
  { value: 'fisherman', label: 'Fisherman' },
];

function Explore(props) {
  const [users, setUsers] = useState([]);

  const mapUsers = (input) => {
    const withDisplay = input.map((user) => ({ ...user, display: true }));
    setUsers(withDisplay);
  };

  const filter = (mentor, mentee) => {
    const filteredUsers = users.map((user) => {
      if (mentor && mentee) {
        return { ...user, display: true };
      }

      if (mentor && !mentee) {
        if (user.position === 'Mentor') {
          return { ...user, display: true };
        }
        return { ...user, display: false };
      }

      if (!mentor && mentee) {
        if (user.position === 'Mentee') {
          return { ...user, display: true };
        }
        return { ...user, display: false };
      }

      if (!mentor && !mentee) {
        return { ...user, display: false };
      }

      return user;
    });

    setUsers(filteredUsers);
  };

  useEffect(() => {
    (async () => {
      if (!props.usersAll) {
        await props.fetchUsers();
      }
      mapUsers(props.usersAll);
    })();
    if (!props.connectionsAll) {
      props.fetchConnections();
    }
  }, []);

  return (
    <Wrapper>
      <TopSection numOfConnections={props.connectionsAll.length} />
      <SearchBox jobTitles={jobTitles} filter={filter} />
      <ProfileList users={users} />
    </Wrapper>
  );
}

const mapStateToProps = (state) => state.userReducer;

Explore.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  fetchConnections: PropTypes.func.isRequired,
  usersAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  connectionsAll: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps, { fetchUsers: fetchAllUsers, fetchConnections: fetchAllConnections })(Explore);
