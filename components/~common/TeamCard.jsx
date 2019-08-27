import React from 'react';
import styled from 'styled-components';

const C = styled.div`
  box-sizing: border-box;
  max-width: ${({ width }) => width || '200px'};
  min-width: ${({ width }) => width || '230px'};
  max-height: ${({ height }) => height || '340px'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 160px;
  padding: 10px;
`;

const Name = styled.h2`
  margin: 0;
`;

const Role = styled.p`
  margin: 7px;
  font-size: 20px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialMedia = styled.img`
  width: 60px;
  padding: 6px;
`;

const CardT = props => {
  const {
    customStyles,
    source,
    name,
    role,
    gitHubHandler,
    linkedinHandler
  } = props;
  return (
    <C {...props} {...customStyles}>
      <Image src={source} />
      <Name>{name}</Name>
      <Role>{role}</Role>
      <Social>
        <a href={gitHubHandler} target="_blank">
          <SocialMedia src={git} />
        </a>
        <a href={linkedinHandler} target="_blank">
          <SocialMedia src={ln} />
        </a>
      </Social>
    </C>
  );
};

export default CardT;
