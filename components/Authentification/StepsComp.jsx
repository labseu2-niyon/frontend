import styled from 'styled-components';
import { GridLoader } from 'react-spinners';

const StepsComp = ({ stepNumber, childrens }) => {
  if (stepNumber === '1') {
    return (
      <Root>
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Divider />
        <Step>
          <i className="fas fa-compass fa-4x"></i>
        </Step>
        <Divider />
        <Step>
          <i className="fas fa-chalkboard-teacher fa-4x"></i>
        </Step>
        <Divider />
        <Step>
          <i className="far fa-smile-beam fa-4x"></i>
        </Step>
        <Divider />
        <Step>
          <i className="fas fa-share-alt-square fa-4x"></i>
        </Step>
      </Root>
    );
  } else if (stepNumber === '2') {
    return (
      <Root>
        <Step>
          <i className="far fa-envelope fa-4x"></i>
        </Step>
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step>
          <i className="fas fa-chalkboard-teacher fa-4x"></i>
        </Step>
        <Step>
          <i className="far fa-smile-beam fa-4x"></i>
        </Step>
        <Step>
          <i className="fas fa-share-alt-square fa-4x"></i>
        </Step>
      </Root>
    );
  } else if (stepNumber === '3') {
    return (
      <Root>
        <Step>
          <i className="far fa-envelope fa-4x"></i>
        </Step>
        <Step>
          <i className="fas fa-compass fa-4x"></i>
        </Step>
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step>
          <i className="far fa-smile-beam fa-4x"></i>
        </Step>
        <Step>
          <i className="fas fa-share-alt-square fa-4x"></i>
        </Step>
      </Root>
    );
  } else if (stepNumber === '4') {
    return (
      <Root>
        <Step>
          <i className="far fa-envelope fa-4x"></i>
        </Step>
        <Step>
          <i className="fas fa-compass fa-4x"></i>
        </Step>
        <Step>
          <i className="fas fa-chalkboard-teacher fa-4x"></i>
        </Step>
        <Step>
          <GridLoader color={'green'} sizeUnit={'px'} size={7} />
        </Step>
        <Step>
          <i className="fas fa-share-alt-square fa-4x"></i>
        </Step>
      </Root>
    );
  } else if (stepNumber === '5') {
    return (
      <Root>
        <Step>
          <i className="far fa-envelope fa-4x"></i>
        </Step>
        <Step>
          <i className="fas fa-compass fa-4x"></i>
        </Step>
        <Step>
          <i className="fas fa-chalkboard-teacher fa-4x"></i>
        </Step>
        <Step>
          <i className="far fa-smile-beam fa-4x"></i>
        </Step>
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
  font-size: 0.5rem;
`;

const Step = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;

  background-color: ${props => props.color};
`;

const Divider = styled.hr`
  width: 6%;

  @media (min-width: 500px) {
    width: 50%;
  }
`;
