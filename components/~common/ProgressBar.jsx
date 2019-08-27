import styled from 'styled-components';
import { useState, useEffect } from 'react';

function ProgressBar({ prevPercentage, newPercentage, barWidth }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Bar prevPercentage={prevPercentage} newPercentage={newPercentage}>
        <div className={`filler ${mounted && 'progress'}`} />
      </Bar>
    </div>
  );
}

const Bar = styled.div`
  position: relative;
  height: 10px;
  width: ${({ barWidth }) => barWidth || '400px'};
  border-radius: 5px;
  background: #eaeaeb;

  .filler {
    background: #4da5cf;
    height: 100%;
    width: ${({ prevPercentage }) => prevPercentage || '0%'};
    border-radius: inherit;
    transition: width 1.5s ease-in;
  }

  .progress {
    width: ${({ newPercentage }) => newPercentage || prevPercentage};
  }
`;

export default ProgressBar;
