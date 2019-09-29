import { useState } from 'react';
import styled from 'styled-components';
import { Card, Icon } from 'antd';
import Link from 'next/link';
import User from './User';
import { theme } from '../../lib/theme';

const UserList = ({
 userList, socket, currentUser, currentConnectionId 
}) => {
  const [chosen, setChosen] = useState(currentConnectionId);
  return (
    <Nav>
      <Header>
        <IconWrapper>
          <Link href="/">
            {/* To resize ant icons we have to use inline styles */}
            <Icon type="home" className="icon" style={{ fontSize: '1.2rem' }} />
          </Link>
        </IconWrapper>

        {currentUser && (
          <Link
            href={{
              pathname: '/my-profile',
              query: {
                user: currentUser.username
              }
            }}
          >
            <UserInfo>
              {/* <PhotoWrapper>
                <Photo>
                  <ImgProfile
                    src={
                      currentUser.profile_picture ||
                      'https://image.flaticon.com/icons/svg/660/660611.svg'
                    }
                    alt="User Profile Picture"
                  />
                </Photo>
              </PhotoWrapper> */}
              <p>Chat</p>
            </UserInfo>
          </Link>
        )}
      </Header>
      {userList
        && currentUser
        && userList.map(user => (
          <User
            user={
              user.requestUser.username !== currentUser.username
                ? user.requestUser
                : user.sentuser
            }
            connectionId={user.connectionId}
            key={user.connectionId}
            socket={socket}
            currentUser={currentUser}
            active={user.connectionId === chosen}
            onClick={() => setChosen(user.connectionId)}
          />
        ))}
    </Nav>
  );
};

export default UserList;

const Nav = styled(Card)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  width: 30%;

  &.ant-card-bordered {
    border: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileWidth}) {
    width: 15%;

    .ant-list-item-meta-content {
      display: none;
    }
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  margin: 1rem;
  display: flex;
  justify-content: left;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f5f5f5;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  margin-right: 0.6rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileWidth}) {
    margin: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};
  }

  .icon {
    margin-bottom: 0.1rem;
  }

  transition: all 1s ease;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 1.25rem;
    margin: 0;
    text-transform: uppercase;

    @media screen and (max-width: ${({ theme }) => theme.mobileWidth}) {
      display: none;
    }
  }
`;

// const PhotoWrapper = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 10px;
// `;

// const Photo = styled.div`
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   background: #eaeaea;
//   overflow: hidden;
// `;

// const ImgProfile = styled.img`
//   object-fit: cover;
//   width: 100%;
//   cursor: pointer;
// `;
