import Link from 'next/link';
import jwt from 'jsonwebtoken';
import styled from 'styled-components';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import Router from 'next/router';
import { useEffect } from 'react';
import { Avatar } from './~common/index';
import { logOutUser } from '../redux/actions/authActions';
import { fetchUser } from '../redux/actions/userActions';
import { profile_placeholder } from '../lib/utils';
import withAuth from '../lib/withAuth';
import { theme } from '../lib/theme';

const Navigation = ({ logOutUser, fetchUser, authReducer, user, socket }) => {
  const userInfo = jwt.decode(authReducer.token);
  useEffect(() => {
    fetchUser(userInfo.username);
  }, []);

  const handleClick = () => {
    logOutUser();
    Router.push('/auth/login');
  };

  return (
    <Nav>
      {user && (
        <div className="desktop">
          <Avatar
            extraLarge
            source={user.profile_picture || profile_placeholder}
          />
          <p className="desktop name">
            {user.first_name} {user.last_name}
          </p>
        </div>
      )}

      {user && (
        <div className="mobile-avatar">
          <Avatar small source={user.profile_picture} />
        </div>
      )}

      <Links>
        <Link href="/">
          <div>
            <Icon type="home" className="icon" />
            <a className="desktop">Home</a>
          </div>
        </Link>

        {user && (
          <Link
            href={{
              pathname: '/my-profile',
              query: {
                user: user.username
              }
            }}
          >
            <div>
              <Icon type="user" className="icon" />
              <a className="desktop">Profile</a>
            </div>
          </Link>
        )}

        <Link href="/chat">
          <div>
            <Icon type="message" className="icon" />
            <a className="desktop">Chat</a>
          </div>
        </Link>

        <Link href="/connections">
          <div>
            <Icon type="share-alt" className="icon" />
            <a className="desktop">Connections</a>
          </div>
        </Link>
        <Link href="/explore">
          <div>
            <Icon type="search" className="icon" />
            <a className="desktop">Explore</a>
          </div>
        </Link>
        {user && (
          <Link
            href={{
              pathname: '/settings',
              query: {
                user: user.username
              }
            }}
          >
            <div>
              <Icon type="setting" className="icon" />
              <a className="desktop">Settings</a>
            </div>
          </Link>
        )}

        <div onClick={handleClick}>
          <Icon type="logout" className="icon" />
          <div className="desktop">Log out</div>
        </div>
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
  padding: 2.5rem 0;
  height: 100vh;
  width: 20%;
  max-width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  .mobile {
    display: none;
  }

  .mobile-avatar {
    display: none;
  }

  .name {
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    padding: 30px 0;
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

  p {
    margin-top: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;

  div {
    margin: 15px 0;
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.black};

      &:hover {
        color: ${({ theme }) => theme.primary};
        transition: color 1s ease;
      }
    }

    &:hover {
      color: ${({ theme }) => theme.primary};
      transition: color 1s ease;
    }
  }

  .icon {
    width: 40px;
    text-align: center;
  }

  i {
    margin-top: 0px;
  }
`;

const mapStateToProps = state => ({
  authReducer: state.authReducer,
  user: state.userReducer.user
});

export default connect(
  mapStateToProps,
  { logOutUser, fetchUser }
)(withAuth(Navigation));
