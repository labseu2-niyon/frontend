import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Icon from './Icon';
import Text from './Text';

const Card = styled.div`
  width: ${({ width }) => width || '250px'};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 10px;
`;

const Row = styled.div`
  margin: 8px 8px 5px 5px;
  display: flex;
  justify-content: flex-start;
`;

const Info = styled.div`
  flex-grow: 1;
  min-width: 0;
  margin: 0 2px;
`;

const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 3px;
  font-size: ${({ theme }) => theme.smallText};

  &.name {
    font-weight: ${({ theme }) => theme.bold};
  }
`;

function UserCard(props) {
  const { source, name, jobTitle, city, country } = props;

  return (
    <Card>
      <Row style={{ display: 'flex' }}>
        <div>
          <Avatar medium source={source}></Avatar>
        </div>
        <Info style={{}}>
          <P className="name">{name}</P>
          <P>{jobTitle}</P>
          <P className="location">
            <Icon small black className="fas fa-map-marker-alt" /> {city},{' '}
            {country}
          </P>
        </Info>
        <Icon medium className="fas fa-user-plus" black></Icon>
      </Row>
    </Card>
  );
}

export default UserCard;
