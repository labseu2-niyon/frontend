import Link from 'next/link';
import styled from 'styled-components';
import { Icon } from 'antd';

const Tab = ({ name, route }) => {
  return (
    <Option>
      <Link href={route}>
        <a>{name}</a>
      </Link>
      <Icon type="right" className="icon" />
    </Option>
  );
};

const Option = styled.div`
  max-width: 50%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon {
    margin: 4px 0 0 5px;
  }
`;

export default Tab;
