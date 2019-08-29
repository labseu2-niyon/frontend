import Navigation from './Navigation';
import styled from 'styled-components';
import Header from './Header';

const Layout = ({ children, pageName }) => {
  return (
    <Wrapper>
      <Navigation></Navigation>
      <Main>
        <Header pageName={pageName}></Header>
        {children}
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: linear-gradient(
    45deg,
    rgba(243, 243, 251, 1) 0%,
    rgba(253, 251, 253, 1) 100%
  ); */
  display: flex;
`;

const Main = styled.div`
  margin-left: 300px;
  margin-right: 40px;
  width: 100%;

  @media (max-width: 500px) {
    margin-left: 60px;
    margin-right: 10px;
  }
`;
export default Layout;
