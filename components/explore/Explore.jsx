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
  src: 'https://image.flaticon.com/icons/svg/1167/1167989.svg',
  position: 'Mentor',
  location: 'Australia',
},
{
  name: 'Bob',
  field: 'Banker',
  description: 'I\'m Bob the Banker',
  src: 'https://image.flaticon.com/icons/svg/1573/1573412.svg',
  position: 'Mentor',
  location: 'Brussels',
},
{
  name: 'Reggie',
  field: 'Fisherman',
  description: 'I\'m Reggie the fisherman',
  src: 'https://image.flaticon.com/icons/svg/307/307911.svg',
  position: 'Mentee',
  location: 'France',
}, {
  name: 'Alan',
  field: 'Athlete',
  description: 'I\'m Alan the athlete',
  src: 'https://image.flaticon.com/icons/svg/1473/1473225.svg',
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
