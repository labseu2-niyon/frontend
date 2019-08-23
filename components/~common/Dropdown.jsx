import styled from 'styled-components';
import { useState } from 'react';

function Dropdown({ title, list, grabOption, icon }) {
  const [showOptions, setOptions] = useState(false);
  const [currentTitle, setTitle] = useState(title);

  function toggle() {
    setOptions(showOptions === false ? true : false);
  }

  function chooseOption(option) {
    setTitle(option.label);
    grabOption(option);
    toggle();
  }

  return (
    <div>
      <Title onClick={toggle}>
        <p>{currentTitle}</p>
        <i className={icon}>🐷</i>
      </Title>

      {showOptions ? (
        <Options>
          {list.map(option => (
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
  color: black;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;

const Options = styled.div`
  cursor: pointer;
  line-height: 1.5rem;
  margin-top: 10px;
  padding: 10px 10px;
  width: ${({ width }) => width || '200px'};
  color: #bfc1c4;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);

  .label {
    &:hover {
      color: #2b303a;
      transition: 0.5s;
    }
  }
`;

export default Dropdown;
