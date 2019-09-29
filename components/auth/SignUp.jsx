import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { getUrl } from '../../redux/actions/utils';
import Header from './Header';
import Card from './Card';
import Content from './ContentWrapper';
import SocialWrapper from './SocialWrapper';
import { lighten } from 'polished';

const baseUrl = getUrl();

const SignUp = () => (
  <Card>
    <Header></Header>

    <Content>
      <h3>Signup</h3>
      <Button onClick={() => Router.push('/auth/email')}>Email</Button>
      <SocialWrapper baseUrl={baseUrl} type="sign up"></SocialWrapper>

      <BottomWrapper>
        <p>
          Already a member?{' '}
          <Link href="/auth/login">
            <a>Login</a>
          </Link>{' '}
        </p>
      </BottomWrapper>
    </Content>
  </Card>
);

function mapStateToProps(state) {
  return { authReducer: state.authReducer };
}

export default connect(
  mapStateToProps,
  {}
)(SignUp);

const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  color: #348fbb;
  border: 2px solid #348fbb;
  margin: 15px 0;

  cursor: pointer;
  &:hover {
    border: 2px solid ${lighten(0.1, '#348fbb')};
  }
  transition: background 1s ease;

  &:first-child {
    margin-bottom: 15px;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
