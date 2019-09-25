import styled from 'styled-components';
import Flip from 'react-reveal/Flip';
import Blob from '../svgs/Blob';
import BlueLogo from '../svgs/BlueLogo';

const CardHeader = () => (
  <Header>
    <a href="https://niyonapp.com/">
      <Title>
        <Flip>
          <BlueLogo width={30} height={30}></BlueLogo>
        </Flip>
        <h2>Niyon</h2>
      </Title>
    </a>
    <Blob></Blob>
  </Header>
);

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-left: 45px;
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 3px;
    margin-left: 10px;
  }
`;

export default CardHeader;
