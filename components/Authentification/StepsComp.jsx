import styled from 'styled-components';
import { GridLoader } from 'react-spinners';

const StepsComp = ({ stepNumber, childrens }) => {
  if (stepNumber === '1') {
    return (
      <Root>
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step color="blue" />
        <Step color="blue" />
        <Step color="blue" />
        <Step color="blue" />
        <Step color="blue" />
      </Root>
    );
  } else if (stepNumber === '2') {
    return (
      <Root>
        <Step color="green" />
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step color="blue" />
        <Step color="blue" />
        <Step color="blue" />
        <Step color="blue" />
      </Root>
    );
  } else if (stepNumber === '3') {
    return (
      <Root>
        <Step color="green" />
        <Step color="green" />
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step color="blue" />
        <Step color="blue" />
        <Step color="blue" />
      </Root>
    );
  } else if (stepNumber === '4') {
    return (
      <Root>
        <Step color="green" />
        <Step color="green" />
        <Step color="green" />
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step color="blue" />
        <Step color="blue" />
      </Root>
    );
  } else if (stepNumber === '5') {
    return (
      <Root>
        <Step color="green" />
        <Step color="green" />
        <Step color="green" />
        <Step color="green" />
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step color="blue" />
      </Root>
    );
  } else if (stepNumber === '6') {
    return (
      <Root>
        <Step color="green" />
        <Step color="green" />
        <Step color="green" />
        <Step color="green" />
        <Step color="green" />
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
      </Root>
    );
  }
  return <Root>{childrens}</Root>;
};

export default StepsComp;

const Root = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin: 10px;
`;

const Step = styled.div`
  width: 40px;
  height: 100%;

  background-color: ${props => props.color};
`;
