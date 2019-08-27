import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const C = styled.div`
  box-sizing: border-box;
  max-width: ${({ width }) => width || '150px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.black};
`;

const Image = styled.img`
  border-radius: 50%;
  max-width: 90%;
  padding: 10px;
`;

const Name = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.medium};
`;

const Role = styled.p`
  margin: ${({ theme }) => theme.xs};
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
`;

const TeamCard = props => {
  const { source, name, title, githubURL, linkedinURL, twitterURL } = props;
  return (
    <C>
      <Image src={source} />
      <Name>{name}</Name>
      <Role>{title}</Role>
      <Social>
        <a href={githubURL} target="_blank">
          <Icon className="fab fa-github" />
        </a>
        <a href={linkedinURL} target="_blank">
          <Icon className="fab fa-linkedin-in" />
        </a>

        <a href={twitterURL} target="_blank">
          <Icon className="fab fa-twitter" />
        </a>
      </Social>
    </C>
  );
};

export default TeamCard;
