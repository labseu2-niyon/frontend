import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from 'antd';

function Dropdown({
  title, list, grabOption, icon, width
}) {
  const [showOptions, setOptions] = useState(false);
  const [currentTitle, setTitle] = useState(title);

  function toggle() {
    setOptions(!showOptions);
  }

  function chooseOption(option) {
    setTitle(option);
    grabOption(option);
    toggle();
  }

  return (
    <div>
      <Title onClick={toggle} width={width}>
        <p style={{ margin: 0 }}>{currentTitle}</p>
        {/* <i className={icon}><span role="img" aria-label="pig">🐷</span></i> */}
        <Icon
          type="arrow-up"
          style={{
            transform: !showOptions ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 200ms'
          }}
        />
      </Title>

      {showOptions ? (
        <Options width={width}>
          {list.map(option => (
            <Op onClick={() => chooseOption(option)} key={option}>
              {option}
            </Op>
          ))}
        </Options>
      ) : null}
    </div>
  );
}

const Title = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  line-height: 0.75rem;
  height: 40px;
  padding: 0px 10px;
  width: ${({ width }) => width || '200px'};
  max-width: 100%;
  color: black;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  border: 1px solid #eaeaea;

  .title { margin: none; }
`;

const Options = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  background: #fff;
  line-height: 1.5rem;
  margin-top: 10px;
  padding: 10px 10px;
  width: ${({ width }) => width || '200px'};
  max-width: 100%;
  color: #bfc1c4;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  border: 1px solid #eaeaea;
  z-index: 5;

  .label {
    &:hover {
      color: #2b303a;
      transition: 0.5s;
    }
  }
`;

const Op = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Dropdown;
