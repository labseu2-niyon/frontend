import { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import User from './User';
import Link from 'next/link';
import { Icon } from 'antd';

const UserList = ({ userList, socket, currentUser, currentConnectionId }) => {
  const [chosen, setChosen] = useState(currentConnectionId);

  return (
    <Nav>
      <Header>
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
              <p className="desktop name">Chats</p>
            </UserInfo>
          </Link>
        )}
        <Link href="/">
          <IconWrapper>
            {/* To resize ant icons we have to use inline styles */}
            <Icon type="home" className="icon" style={{ fontSize: '18px' }} />
          </IconWrapper>
        </Link>
      </Header>

      {userList &&
        currentUser &&
        userList.map(user => {
          return (
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
          );
        })}
    </Nav>
  );
};

const Nav = styled(Card)`
  display: flex;
  flex-direction: column;
  background: white;
  box-sizing: border-box;
  padding: 15px;
  height: 100vh;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: scroll;

  &.ant-card-bordered {
    border: none;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: 500;
    font-size: 20px;
    margin: 0;
    text-transform: uppercase;
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

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f5f5f5;
  cursor: pointer;

  .icon {
    margin-bottom: 2px;
    &:hover {
      color: #348fbb;
      transition: color 0.5s ease;
    }
  }
`;

export default UserList;
