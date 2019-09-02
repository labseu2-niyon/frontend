import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Heading2 } from '../~common';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    background: pink;
`;

const BioSection = styled.div`
    position: absolute;
    top: -40px;
    box-sizing: border-box;
    width: 650px;
    max-width: 90%;
    background: #fff;
    border-radius: 8px;
    padding: 1rem 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const Location = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        align-items: center;
    }

    i {
        padding-top: 3px;
        margin-right: 10px;
    }
`;

const Social = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        margin: 0 10px;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        display: flex;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;
        color: #484848;
        cursor: pointer;
    }

    button:hover {
        color: #000;
    }

    i {
        margin-top: 5px;
        margin-left: 1px;
        font-size: 18px;
    }
`;

function Bio({ position, location, text }) {
  return (
    <Wrapper>
      <BioSection>
        <Location>
          <div><Icon type="book" />{position}</div>
          <div><Icon type="global" />{location}</div>
        </Location>
        <Heading2>Bio</Heading2>
        {text.map((line) => <p>{line}</p>)}
        <Social>
          <button type="button">
            <Icon type="linkedin" size="large" />
          </button>
          <button type="button">
            <Icon type="twitter" />
          </button>
          <button type="button">
            <Icon type="facebook" />
          </button>
        </Social>
      </BioSection>
    </Wrapper>
  );
}

Bio.propTypes = {
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Bio;
