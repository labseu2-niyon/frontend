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
      <div className="desktop">
        <Avatar extraLarge source={dummyUser.image}></Avatar>
        <Heading4 className="desktop">{dummyUser.name}</Heading4>
      </div>

      <div className="mobile-avatar">
        <Icon medium className="fas fa-times mobile-icon"></Icon>
        <Avatar small source={dummyUser.image}></Avatar>
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
            <a className="desktop">Profile</a>
          </div>
        </Link>
        <Link href="/">
          <div>
            <Icon medium className="fas fa-users icon"></Icon>
            <a className="desktop">Connections</a>
          </div>
        </Link>
        <Link href="/explore">
          <div>
            <Icon medium className="fas fa-compass icon"></Icon>
            <a className="desktop">Explore</a>
          </div>
        </Link>
        <Link href="/settings">
          <div>
            <Icon medium className="fas fa-cog icon"></Icon>
            <a className="desktop">Settings</a>
          </div>
        </Link>
        <Link href="/">
          <div>
            <Icon medium className="fas fa-sign-out-alt icon"></Icon>
            <a className="desktop">Log out</a>
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

  .mobile {
    display: none;
  }

  .mobile-avatar {
    display: none;
  }

  @media (max-width: 500px) {
    width: 50px;
    transition: width 2s ease;

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }

    .mobile-avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .mobile-icon {
      margin-bottom: 20px;
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
    width: 40px;
    text-align: center;
  }
`;

export default Navigation;
