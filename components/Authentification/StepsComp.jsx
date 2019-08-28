import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Steps, Icon } from 'antd';
const { Step } = Steps;

const StepsComp = () => {
  return (
    <Root>
      <Step status="finish" icon={<Icon type="user" />} />
      <Step status="finish" icon={<Icon type="solution" />} />
      <Step status="process" icon={<Icon type="loading" />} />
      <Step status="wait" icon={<Icon type="smile-o" />} />
    </Root>
  );
};

export default StepsComp;

const Root = styled(Steps)`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;
