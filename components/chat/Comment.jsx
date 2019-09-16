import { Comment, Icon, Tooltip, Avatar } from 'antd';

const CommentComp = ({ username, message, date }) => (
  <Comment
    author={<a>{username}</a>}
    avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={<p>{message}</p>}
    datetime={
      <Tooltip title="Date in another format">
        <span>{date}</span>
      </Tooltip>
    }
  />
);

export default CommentComp;
