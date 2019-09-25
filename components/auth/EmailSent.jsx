import styled from 'styled-components';
import Link from 'next/link';
import { Heading4, Text, Button } from '../~common/index';
import Header from './CardHeader';
import Card from './Card';

const EmailSent = () => (
  <Card>
    <Header></Header>
    <TopWrapper>
      <Heading4 primary>We have just emailed you a link.</Heading4>
      <Text small>
        Please check your email and click the secure link. You will then be able
        to change your password.
      </Text>
    </TopWrapper>
    <ButtonArea>
      <Link href="/auth/reset-password">
        <a>
          <Button large secondary>
            Try a different email
          </Button>
        </a>
      </Link>
      <Link href="/auth/login">
        <Button large primary type="submit">
          Back to Login
        </Button>
      </Link>
    </ButtonArea>
    <BottomWrapper>
      <Text small>
        If you do not see our email, please check your spam folder.
      </Text>
    </BottomWrapper>
  </Card>
);

export default EmailSent;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 320px;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;

  p {
    text-align: center;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 20px;

  p {
    text-align: center;
  }
`;
