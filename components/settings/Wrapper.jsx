import Tab from './Tab';
import styled from 'styled-components';

const Wrapper = () => {
  return (
    <Main>
      <Tabs>
        <Tab name="Edit Profile" route="/settings" />
        <Tab name="Change Password" route="/password"></Tab>
      </Tabs>
      <div>
        {/* 1. Change Profile Picture
       2. First Name and Last Name
       3. Username
       4. Biography
       5. Mentor or mentee option
       6. City, Country
       6. Social Usernames */}
      </div>
    </Main>
  );
};

const Main = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 650px;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const Tabs = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.black};
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default Wrapper;
