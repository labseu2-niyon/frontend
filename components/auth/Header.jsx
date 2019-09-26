import styled from 'styled-components';
import Blob from '../svgs/Blob';
import BlueLogo from '../svgs/BlueLogo';

const Header = () => (
  <Wrapper>
    <a href="https://niyonapp.com/">
      <Title>
        <BlueLogo width={30} height={30}></BlueLogo>
        <h2>Niyon</h2>
      </Title>
    </a>
    <Blob></Blob>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -40px;
`;

const Title = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 3px;
    margin-left: 10px;
  }
`;

export default Header;
