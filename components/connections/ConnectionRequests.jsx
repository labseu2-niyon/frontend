import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import Link from 'next/link';
import { Heading2 } from '../~common';
import ExploreCard from '../explore/ExploreCard';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    transition: max-height 100ms;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        color: #484848;
        font-size: 20px;
        width: 40px;
        text-align: center;
        transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
        transition: transform 100ms;
    }
`;

const CardWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    height: 100px;
    width: 100%;
`;

const Person = styled.div`
  box-sizing: border-box;
  width: auto;
  height: 60px;
  border-radius: 40px;
  background: #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px;
  padding-right: 32px;
  margin-right: 32px;
  transition: transform 400ms;

  .img-wrapper {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  small {
    color: #484848;
  }

  p {
    margin: 5px 0;
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

function ConnectionRequests({ users }) {
  const [open, setOpen] = useState(true);
  console.log(users);

  return (
    <Wrapper open={open}>
      <Header open={open}>
        <Heading2>Connection Requests</Heading2>
      </Header>
      <CardWrapper>
        { users.map(({ connection }) => (
          <Link href={{
            pathname: '/profile',
            query: { id: connection.id }
          }}
          >
            <Person>
              <div className="img-wrapper">
                <img src={connection.profile_picture || 'https://image.flaticon.com/icons/svg/660/660611.svg'} alt="" height="100%" />
              </div>
              <div className="content">
                <small>{connection.username}</small>
                <p>{connection.first_name} {connection.last_name}</p>
              </div>
            </Person>
          </Link>
        )) }
      </CardWrapper>
    </Wrapper>
  );
}

ConnectionRequests.propTypes = {
  users: PropTypes.arrayOf().isRequired
};

export default ConnectionRequests;
