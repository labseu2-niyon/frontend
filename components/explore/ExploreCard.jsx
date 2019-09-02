import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Heading3 } from '../~common';

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 48%;
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    margin: 1rem 0;

    @media (max-width: 600px) {
        width: 100%;
        padding: 0.5rem 1rem;
    }
`;

const Contents = styled.div`
    display: flex;
    padding: 10px 0;
`;

const PhotoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
`;

const Photo = styled.div`
    width: 100px;
    height: 100px;
    background: #eaeaea;
    border-radius: 50%;
    overflow: hidden;
`;

const Text = styled.div`

`;

const Location = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #484848;

    div {
        display: flex;
        align-items: center;
    }
`;

const L = styled.div`
  color: #484848;
 
  small {
    margin: 0 10px;
  }

  i {
    padding-top: 3px;
  }
`;

function ExploreCard({
  name, field, description, src, position, location,
}) {
  return (
    <Wrapper>
      <Contents>
        <PhotoWrapper>
          <Photo>
            <img src={src} alt="" height="100%" />
          </Photo>
        </PhotoWrapper>
        <Text>
          <Heading3>{name}</Heading3>
          <small>Field: {field}</small>
          <p>{description}</p>
        </Text>
      </Contents>
      <Location>
        <L><Icon type="book" /><small>{position}</small></L>
        <L><Icon type="global" /><small>{location}</small></L>
      </Location>
    </Wrapper>
  );
}

ExploreCard.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ExploreCard;
