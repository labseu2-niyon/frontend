import styled from 'styled-components';
import { Steps, Icon } from 'antd';

const { Step } = Steps;

const StepsComp = ({ stepNumber }) => {
  return (
    <ProgressBar>
      <Steps size="small" current={stepNumber}>
        <Step title="Account" />
        <Step title="Mentorship" />
        <Step title="Extra" />
      </Steps>
    </ProgressBar>
  );
};

export default StepsComp;

const ProgressBar = styled.div`
  margin: 3rem auto 0 auto;
  max-width: 400px;

  .ant-steps-item-process .ant-steps-item-icon {
    background: #348fbb;
    border-color: #348fbb;
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: #348fbb;
  }

  .ant-steps-item-title {
    color: #222222;
  }

  .ant-steps-item-title::after {
    background-color: #348fbb;
  }

  svg {
    fill: #348fbb;
  }
`;
