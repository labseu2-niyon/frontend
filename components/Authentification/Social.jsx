import styled from 'styled-components';
import StepsComp from './StepsComp';
import { Heading2 } from '../~common/index';

const Social = () => {
  return (
    <Root>
      <StepsComp stepNumber="1" />
      <Heading2>Welcome</Heading2>
    </Root>
  );
};

export default Social;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
