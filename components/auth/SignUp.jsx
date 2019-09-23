import Flip from 'react-reveal/Flip';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { Text, Button, Heading2 } from '../~common/index';
import { getUrl } from '../../redux/actions/utils';
import Logo from '../~common/Logo';

const baseUrl = getUrl();

const SignUp = ({}) => (
  <Root>
    <Logo />
    <Heading2 primary>Signup</Heading2>
    <ButtonArea>
      <SocialWrapper>
        <a href={`${baseUrl}/auth/facebook`}>
          <StyledImage
            src="../../static/social/social-facebook.png"
            alt="facebook"
          />
        </a>

        <a href={`${baseUrl}/auth/github`}>
          <StyledImage
            src="../../static/social/social-github.png"
            alt="github"
          />
        </a>

        <a href={`${baseUrl}/auth/google`}>
          <StyledImage
            src="../../static/social/social-google.png"
            alt="google"
          />
        </a>
      </SocialWrapper>
      <Flip top>
        <Button
          large
          outline
          primary
          onClick={() => Router.push('/auth/email')}
        >
          Email
        </Button>
      </Flip>
    </ButtonArea>
    <Text small>
      Already a member? <Link href="/auth/login">Login IN</Link>{' '}
    </Text>
  </Root>
);

function mapStateToProps(state) {
  return { authReducer: state.authReducer };
}

export default connect(
  mapStateToProps,
  {}
)(SignUp);

const Root = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    margin: 20px 0;
  }
  a {
    text-decoration: none;
  }
  h2 {
    padding: 2rem;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 90%;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 3rem;
  margin: 0 0.8rem;
`;
