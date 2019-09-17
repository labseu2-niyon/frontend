import { Comment, Icon, Tooltip, Avatar } from 'antd';

const CommentComp = ({ username, message, date, image }) => (
  <Comment
    author={<a>{username}</a>}
    avatar={<Avatar src={image} alt={username} />}
    content={<p>{message}</p>}
    datetime={
      <Tooltip title="Date in another format">
        <span>{date}</span>
      </Tooltip>
    }
  />
);

export default CommentComp;
