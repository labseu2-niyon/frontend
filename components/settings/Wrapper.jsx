//import Tab from './Tab';
import styled from 'styled-components';

const Wrapper = ({ children }) => {
  return (
    <Main>
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

  .ant-tabs {
    width: 100%;
  }
  .ant-tabs-nav {
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 400px) {
      width: 140px;
      justify-content: space-between;
    }
  }
  .ant-tabs-tab {
    width: 250px;
    text-align: center;

    @media (max-width: 800px) {
      width: 200px;
    }
    @media (max-width: 600px) {
      width: 150px;
    }
    @media (max-width: 400px) {
      width: 140px;
    }
  }
`;

export default Wrapper;
