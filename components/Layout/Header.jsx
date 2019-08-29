import { Heading2 } from '../../components/~common/index';
import styled from 'styled-components';

const Header = ({ pageName }) => {
  return (
    <H>
      <Heading2>{pageName}</Heading2>
    </H>
  );
};

const H = styled.div`
  margin-top: 2.5rem;
`;

export default Header;
