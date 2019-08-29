import { Heading3 } from '../~common/index';
import Logo from '../svgs/Logo';
import styled from 'styled-components';

const Header = ({ pageName }) => {
  return (
    <header>
      <H>
        <Heading3>{pageName}</Heading3>
        <div>
          <Logo className="mobile-logo"></Logo>
        </div>
      </H>
    </header>
  );
};

const H = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    font-weight: 500;
    margin: 0;
    text-transform: uppercase;
  }

  @media (max-width: 500px) {
    margin: 2rem 0;

    .mobile-logo {
      width: 20px;
      height: 20px;
    }
  }
`;

export default Header;
