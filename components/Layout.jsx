import styled from 'styled-components';
import Navigation from './Navigation';
import Header from './Header';
import { theme } from '../lib/theme';

const Layout = ({ children, pageName }) => (
  <Wrapper>
    <Navigation />
    <Main>
      <Header pageName={pageName} />
      {children}
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
  /* background: linear-gradient(
    45deg,
    rgba(243, 243, 251, 1) 0%,
    rgba(253, 251, 253, 1) 100%
  ); */
  display: flex;
`;

const Main = styled.div`
  margin-left: 25%;
  margin-right: 5%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    margin-left: 15%;
    margin-right: 3%;
  }
`;

export default Layout;
