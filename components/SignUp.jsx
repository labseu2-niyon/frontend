import styled from 'styled-components';
import { Text, Button } from './~common/index';
//import { primary, secondary } from '../lib/theme';
import Link from 'next/link';

const SignUp = () => {
  return (
    <Root>
      <Text small>Lorem Ipsum, welcome message, blah blah blah.`</Text>
      <ButtonArea>
        <Button large primary>
          Google
        </Button>
        <Button large secondary>
          Github
        </Button>
        <Button large style={{ background: 'darkred' }}>
          Twitter
        </Button>
        <Button large style={{ background: 'green' }}>
          Facebook
        </Button>
        <Button large outline primary>
          Email
        </Button>
      </ButtonArea>
      <Text small>Already a member? Login IN </Text>
    </Root>
  );
};

export default SignUp;

const Root = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  p {
    text-align: center;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
`;
