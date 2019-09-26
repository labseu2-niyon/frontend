import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading } from './~common';
import { theme } from '../lib/theme';

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

    @media (max-width: ${({ theme }) => theme.mobileWidth}) {
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

  @media (max-width: ${({ theme }) => theme.mobileWidth}) {
    margin: 30px 0;
    width: 100%;
    
    img {
      width: 200px;
    }

   }
`;

function TopSection({ buttons, src }) {
  return (
    <Wrapper>
      <Content>
        <Heading>Connect With Anyone</Heading>
        <p>
        Niyon is a platform for connecting young professionals<br />
        with mentors in West Africa.
        </p>
        {buttons}
      </Content>
      <Image>
        <img src={src} alt="" />
      </Image>
    </Wrapper>
  );
}

TopSection.propTypes = {
  buttons: PropTypes.element.isRequired,
  src: PropTypes.string.isRequired,
};

export default TopSection;
