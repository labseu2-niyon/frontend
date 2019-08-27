import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Icon from './Icon';

const C = styled.div`
  box-sizing: border-box;
  max-width: ${({ width }) => width || '150px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.black};
`;

const Name = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.medium};
  margin-top: ${({ theme }) => theme.xs};
`;

const Role = styled.p`
  margin: ${({ theme }) => theme.xs};
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
`;

const TeamCard = props => {
  const { source, name, jobTitle, githubURL, linkedinURL, twitterURL } = props;
  return (
    <C>
      <Avatar extraLarge source={source} />
      <Name>{name}</Name>
      <Role>{jobTitle}</Role>
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
