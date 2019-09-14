import Link from 'next/link';
import { List, Avatar } from 'antd';
import styled from 'styled-components';

const User = ({ user }) => {
  return (
    <Root>
      <Link href={`/chat/${user.username}`}>
        {/* <div>
          <Av large source={user.profile_picture} />
          <p>
            {user.first_name} {user.last_name}
          </p>
        </div> */}

        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={user.profile_picture} />}
            title={<a href="https://ant.design">{user.first_name}</a>}
            // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      </Link>
    </Root>
  );
};

export default User;

const Root = styled.div`
  width: 100px;
`;
