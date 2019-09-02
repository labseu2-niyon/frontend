import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from 'antd';

function Dropdown({
  title, list, grabOption, icon, width,
}) {
  const [showOptions, setOptions] = useState(false);
  const [currentTitle, setTitle] = useState(title);

  function toggle() {
    setOptions(!showOptions);
  }

  function chooseOption(option) {
    setTitle(option.label);
    grabOption(option);
    toggle();
  }

  return (
    <div>
      <Title onClick={toggle} width={width}>
        <p>{currentTitle}</p>
        {/* <i className={icon}><span role="img" aria-label="pig">🐷</span></i> */}
        <Icon type="arrow-up" style={{ transform: !showOptions ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }} />
      </Title>

      {showOptions ? (
        <Options width={width}>
          {list.map((option) => (
            <div key={option.value}>
              <div className="label" onClick={() => chooseOption(option)}>
                {option.label}
              </div>
            </div>
          ))}
        </Options>
      ) : null}
    </div>
  );
}

const Title = styled.div`
  cursor: pointer;
  line-height: 0.75rem;
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
`;

const Options = styled.div`
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

  .label {
    &:hover {
      color: #2b303a;
      transition: 0.5s;
    }
  }
`;

export default Dropdown;
