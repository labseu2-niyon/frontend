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
  margin: 3px;
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.smallText};
  margin: 3px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin: 0 5px;
  }
`;

const TeamCard = props => {
  const { source, name, jobTitle, githubURL, linkedinURL, twitterURL } = props;
  return (
    <C>
      <Avatar large source={source} />
      <Name>{name}</Name>

      <Role>{jobTitle}</Role>
      <Social>
        <a href={githubURL} target="_blank">
          <Icon className="fab fa-github" black />
        </a>
        <a href={linkedinURL} target="_blank">
          <Icon className="fab fa-linkedin-in" grey />
        </a>

        <a href={twitterURL} target="_blank">
          <Icon className="fab fa-twitter" primary />
        </a>
      </Social> */}
    </C>
  );
};

export default TeamCard;
