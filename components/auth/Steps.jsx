import styled from 'styled-components';
import { Steps } from 'antd';

const { Step } = Steps;

const StepsComp = () => {
  return (
    <ProgressBar>
      <Steps progressDot size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>
    </ProgressBar>
  );
};

export default StepsComp;

const ProgressBar = styled.div`
  margin-top: 3rem;
`;
