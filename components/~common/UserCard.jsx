import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Icon from './Icon';
import Text from './Text';

const Card = styled.div`
  width: ${({ width }) => width || '250px'};
  max-height: ${({ height }) => height || '80px'};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 10px;
  position: relative;
`;

const Row = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-start;
`;

const Col = styled.div`
  margin: 0 5px;
`;

const P = styled.p`
  margin: 3px 0px;
  font-size: ${({ theme }) => theme.smallText};
  white-space: nowrap;
  overflow: hidden;

  &.name {
    font-weight: ${({ theme }) => theme.bold};
  }

  &.location {
    font-style: italic;
  }
`;

const ConnectIcon = styled.div`
  position: absolute;
  right: 5px;
  top: 10px;
`;

function UserCard(props) {
  const { source, name, jobTitle, city, country } = props;

  return (
    <Card>
      <Row>
        <Col>
          <Avatar medium source={source} />
        </Col>
        <Col>
          <P className="name">{name}</P>
          <P>{jobTitle}</P>
          <div>
            <P className="location">
              <Icon small className="fas fa-map-marker-alt" />
              {city}, {country}
            </P>
          </div>
        </Col>
      </Row>

      <ConnectIcon>
        <Icon medium className="fas fa-user-plus" />
      </ConnectIcon>
    </Card>
  );
}

export default UserCard;
