import styled from 'styled-components';

function Spinner() {
  return <Circle />;
}

const Circle = styled.div`
  border-radius: 50%;
  border-top: 2px solid #4da5cf;
  border-left: 2px solid #4da5cf;
  border-right: 2px solid #4da5cf;
  border-bottom: 2px solid #eaeaeb;
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
