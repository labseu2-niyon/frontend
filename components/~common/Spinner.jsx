import styled from 'styled-components';
import { PulseLoader, GridLoader } from 'react-spinners';

function Spinner() {
  return (
    <div>
      <Circle />
    </div>
  );
}

const Circle = styled.div`
  border-radius: 50%;
  border: 2.5px solid #4da5cf;
  border-bottom: 2.5px solid #eaeaeb;
  width: 20px;
  height: 20px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
