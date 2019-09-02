import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopSection from './TopSection';
import SearchBox from './SearchBox';
import ProfileList from './ProfileList';

const Wrapper = styled.main`
    width: 100%;
`;

const jobTitles = [
  { value: 'hello', label: 'hi' },
  { value: 'Bonjour', label: 'salut' },
];

const profiles = [{
  name: 'Andy',
  field: 'Whaler',
  description: 'I\'m andy the whaler',
  src: '',
  position: 'Mentor',
  location: 'Japan',
},
{
  name: 'Bob',
  field: 'Porker',
  description: 'I\'m andy the whaler',
  src: '',
  position: 'Mentor',
  location: 'Japan',
},
{
  name: 'Reggie',
  field: 'Fisherman',
  description: 'I\'m andy the whaler',
  src: '',
  position: 'Mentee',
  location: 'France',
}];

function Explore() {
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
    mapUsers(profiles);
  }, []);

  return (
    <Wrapper>
      <TopSection />
      <SearchBox jobTitles={jobTitles} filter={filter} />
      <ProfileList users={users} />
    </Wrapper>
  );
}

export default Explore;
