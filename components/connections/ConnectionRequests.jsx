import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Heading2 } from '../~common';
import ExploreCard from '../explore/ExploreCard';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    background: #eaeaea;
    border-radius: 8px;
    border: #484848 1px solid;
    margin: 1rem 0;
    padding: 0 16px;
    max-height: ${({ open }) => (open ? '1200px' : '70px')};
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
    justify-content: space-between;
    width: 100%;
`;

function ConnectionRequests({ users }) {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper open={open}>
      <Header open={open}>
        <Heading2>Connection Requests</Heading2>
        <Icon type="down" className="icon" onClick={() => setOpen(!open)} />
      </Header>
      <CardWrapper>
        { users.map(({ connection }) => <ExploreCard {...connection} />) }
      </CardWrapper>
    </Wrapper>
  );
}

ConnectionRequests.propTypes = {
  users: PropTypes.arrayOf().isRequired
};

export default ConnectionRequests;
