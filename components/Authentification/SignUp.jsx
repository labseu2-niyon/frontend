import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { Text, Button } from '../~common/index';

const SignUp = () => (
  <Root>
    <Text small>Lorem Ipsum, welcome message, blah blah blah.`</Text>
    <ButtonArea>
      <Button large primary onClick={() => Router.push('/auth/social')}>
        Google
      </Button>
      <Button large secondary onClick={() => Router.push('/auth/social')}>
        Github
      </Button>

      <Button large danger onClick={() => Router.push('/auth/social')}>
        Twitter
      </Button>
      <Button large warning onClick={() => Router.push('/auth/social')}>
        Facebook
      </Button>

      <Button large outline primary onClick={() => Router.push('/auth/email')}>
        Email
      </Button>
    </ButtonArea>
    <Text small>
      Already a member? <Link href="/auth/login">Login IN</Link>{' '}
    </Text>
  </Root>
);

export default SignUp;

const Root = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    margin: 50px 0;
  }
  a {
    text-decoration: none;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 320px;
`;
