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
      console.log(user.username);
      storeToken(newToken, user.username);
    }
  }, []);

  return (
    <Root>
      <Heading2 primary>Continue</Heading2>
      <Text>Continue to home page</Text>
      <Button primary large onClick={() => Router.push('/')}>
        Continue
      </Button>
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
