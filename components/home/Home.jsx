import React from 'react';
import styled from 'styled-components';
import TopSection from './TopSection';
import ProfileList from './ProfileList';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

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
},
{
  name: 'Ronald',
  field: 'Fry Chef',
  description: 'I\'m Ronald the fry chef',
  src: 'https://image.flaticon.com/icons/svg/817/817382.svg',
  position: 'Mentee',
  location: 'France',
}, {
  name: 'Pete',
  field: 'Guy',
  description: 'I\'m Pete i\'m just a guy',
  src: 'https://image.flaticon.com/icons/svg/145/145859.svg',
  position: 'Mentee',
  location: 'France',
}];

function Home() {
  return (
    <Wrapper>
      <TopSection />
      <ProfileList title="UserSuggestions" users={profiles} />
      <div style={{
        width: '100%', height: 1, background: '#eaeaea', border: 'none',
      }}
      />
      <ProfileList title="My Connections" users={profiles} />
    </Wrapper>
  );
}

export default Home;
