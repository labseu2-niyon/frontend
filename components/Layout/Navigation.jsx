import Link from 'next/link';
import styled from 'styled-components';
import { Avatar, Heading4, Icon } from '../~common/index';

const dummyUser = {
  image: 'https://milan.serverlessdays.io/speakers/guillermo-rauch.jpg',
  name: 'Guillermo Rauch'
};

const Navigation = () => {
  return (
    <Nav>
      <div>
        <Avatar extraLarge source={dummyUser.image}></Avatar>
        <Heading4>{dummyUser.name}</Heading4>
      </div>
      <Links>
        <Link href="/dashboard">
          <div>
            <Icon medium className="fas fa-home icon"></Icon>
            <a className="desktop">Home</a>
          </div>
        </Link>
        <Link href="/[username]">
          <div>
            <Icon medium className="fas fa-user-circle icon"></Icon>
            <a>Profile</a>
          </div>
        </Link>
        <Link href="/">
          <div>
            <Icon medium className="fas fa-users icon"></Icon>
            <a>Connections</a>
          </div>
        </Link>
        <Link href="/explore">
          <div>
            <Icon medium className="fas fa-compass icon"></Icon>
            <a>Explore</a>
          </div>
        </Link>
        <Link href="/settings">
          <div>
            <Icon medium className="fas fa-cog icon"></Icon>
            <a>Settings</a>
          </div>
        </Link>
        <Link href="/">
          <div>
            <Icon medium className="fas fa-sign-out-alt icon"></Icon>
            <a>Log out</a>
          </div>
        </Link>
      </Links>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: ${({ theme }) => theme.boxShadow};
  box-sizing: border-box;
  padding: 40px 0;
  height: 100vh;
  width: 250px;

  @media (max-width: 500px) {
    .desktop {
      display: none;
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;

  div {
    margin: 20px 0;
    display: flex;
    align-items: center;
  }

  .icon {
    width: 30px;
  }
`;

export default Navigation;
