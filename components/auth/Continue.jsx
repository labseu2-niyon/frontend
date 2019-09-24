import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { storeToken } from '../../redux/actions/authActions';
import { Heading2, Text, Button } from '../~common/index';

const ContinuePage = ({ storeToken }) => {
  const nextRouter = useRouter();
  useEffect(() => {
    const newToken = nextRouter.query.token;
    if (newToken) {
      const user = jwt.decode(newToken);
      storeToken(newToken, user.username);
      Router.push('/');
    } else {
      Router.push('/auth/login');
    }
  }, []);

  return (
    <Root>
      <Heading2 primary>Redirecting</Heading2>
    </Root>
  );
};

const mapDispatchToProps = {
  storeToken
};

export default connect(
  state => state,
  mapDispatchToProps
)(ContinuePage);

const Root = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 0 20px;
    text-align: center;
  }
`;
