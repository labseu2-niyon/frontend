import styled from 'styled-components';
import Link from 'next/link';
import { Heading4, Text, Button } from '../~common/index';

const EmailSent = () => (
  <>
    <Root>
      <Heading4>We have just emailed you a link</Heading4>
      <Text small>Please check your email and click the secure link</Text>

      <ButtonArea>
        {/* <Link>
          <Button large primary type="submit">
            Resend link
          </Button>
        </Link> */}
        <Link href="/auth/reset-password">
          <a>
            <Button large secondary>
              Try a different email
            </Button>
          </a>
        </Link>
      </ButtonArea>

      <Text small>
        If you do not see our email, please check your spam folder.
      </Text>
    </Root>
  </>
);

export default EmailSent;

const Root = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 320px;
`;
