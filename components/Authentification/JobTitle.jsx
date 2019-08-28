import styled from 'styled-components';
import Steps from './StepsComp';
import { Heading2, Button, Text } from '../~common/index';

const JobTitle = () => {
  return (
    <Root>
      <Steps stepNumber="3" />
      <Heading2>Mentorship Info</Heading2>
      <Text small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        nisl, aliquam nec erat et, efficitur mollis metus.
      </Text>
      <MentorIcons>
        <Costum>
          <i className="fas fa-user-graduate fa-6x"></i>
          <Info>
            <p>Mentee</p>
            <i className="fas fa-info-circle"></i>
          </Info>
        </Costum>
        <Costum>
          <i className="fas fa-user-cog fa-6x"></i>
          <Info>
            <p>Mentor</p>
            <i className="fas fa-info-circle"></i>
          </Info>
        </Costum>
      </MentorIcons>
    </Root>
  );
};

export default JobTitle;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MentorIcons = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  position: relative;
  i {
    color: grey;
  }
`;

const Costum = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Info = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 3px;
  align-items: center;

  i {
    padding-left: 5px;
    color: black;
  }
`;
