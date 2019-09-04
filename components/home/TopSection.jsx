import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { Heading, Button } from '../~common';

const Wrapper = styled.section`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 4rem 0;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;

    p {
        line-height: 1.5;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      flex-direction: column-reverse;
      
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  img {
    width: 280px;
  }

  @media (max-width: 600px) {
    margin: 30px 0;
    width: 100%;
    
    img {
      width: 200px;
    }

   }
`;

const ButtonWrapper = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 150px;
        height: 85px;
        flex-direction: column;
    }
`;

function TopSection({ numOfConnections = 0 }) {
  return (
    <Wrapper>
      <Content>
        <Heading>Connect With Anyone</Heading>
        <p>
        Niyon is a platform for connecting young professionals<br />
with mentors in West Africa.
        </p>
        <ButtonWrapper>
          <Button primary>Connections ({numOfConnections})</Button>
          <Link href="/explore"><Button primary>Explore</Button></Link>
        </ButtonWrapper>
      </Content>
      <Image>
        <img src="/static/hacker.svg" alt="" />
      </Image>
    </Wrapper>
  );
}

TopSection.propTypes = {
  numOfConnections: PropTypes.number.isRequired,
};

export default TopSection;
