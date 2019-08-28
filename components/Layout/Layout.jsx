import Navigation from './Navigation';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navigation></Navigation>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(
    45deg,
    rgba(243, 243, 251, 1) 0%,
    rgba(253, 251, 253, 1) 100%
  );
`;

export default Layout;
