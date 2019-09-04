import Tab from './Tab';
import styled from 'styled-components';

const Wrapper = ({ children }) => {
  return (
    <Main>
      <Tabs>
        <Tab name="Edit Profile" route="/settings" />
        <Tab name="Change Password" route="/password"></Tab>
      </Tabs>
      <div>{children}</div>
    </Main>
  );
};

const Main = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: 650px;
  margin: 2rem auto;
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
