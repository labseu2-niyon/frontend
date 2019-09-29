import styled from 'styled-components';
import Link from 'next/link';
import Header from './Header';
import Card from './Card';
import Content from './ContentWrapper';
import { lighten } from 'polished';

const EmailSent = () => (
  <Card>
    <Header></Header>
    <Content>
      <Section>
        <h4>We've just sent you an email.</h4>
        <p>
          Follow the instructions to change your password (if you do not see our
          email please check your spam folder).
        </p>
      </Section>

      <Section>
        <Link href="/auth/reset-password">
          <a>
            <Button>Try a different email</Button>
          </a>
        </Link>
        <Link href="/auth/login">
          <Button primary>Back to login</Button>
        </Link>
      </Section>
    </Content>
  </Card>
);

const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  color: white;
  border: none;
  background: ${props => (props.primary ? '#348fbb' : '#859755')};

  cursor: pointer;
  &:hover {
    background: ${props =>
      props.primary
        ? `${lighten(0.1, '#348fbb')}`
        : `${lighten(0.1, '#859755')}`};
  }
  transition: background 1s ease;

  &:first-child {
    margin-bottom: 15px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h4 {
    margin-bottom: 20px;
  }
`;

export default EmailSent;
