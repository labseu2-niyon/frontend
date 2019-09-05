import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Heading, Button } from '../~common';

const Wrapper = styled.section`
    box-sizing: border-box;
    display: flex;
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
    }
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

function TopSection() {
  return (
    <Wrapper>
      <div>
        <Heading>Connect With Anyone</Heading>
        <p>
        Niyon is a platform for connecting young professionals<br />
with mentors in West Africa.
        </p>
        <Link href="explore"><Button primary>Explore</Button></Link>
      </div>
      <Image>
        <img src="/static/friends-online.svg" alt="" />
      </Image>
    </Wrapper>
  );
}
export default TopSection;
