import styled from 'styled-components';
import jwt from 'jsonwebtoken';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { storeToken } from '../../redux/actions/authActions';

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
    <Wrapper>
      <h2>Redirecting...</h2>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  storeToken
};

export default connect(
  state => state,
  mapDispatchToProps
)(ContinuePage);

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #348fbb;
  }
`;
